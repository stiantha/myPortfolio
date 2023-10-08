import json
import sqlite3

conn = sqlite3.connect('rosterdb.sqlite')
cur = conn.cursor()

# Do some setup
cur.executescript('''
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Member;
DROP TABLE IF EXISTS Course;

CREATE TABLE User (
    id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name   TEXT UNIQUE
);

CREATE TABLE Course (
    id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    title  TEXT UNIQUE
);

CREATE TABLE Member (
    user_id     INTEGER,
    course_id   INTEGER,
    role        INTEGER,
    PRIMARY KEY (user_id, course_id)
);
''')

fname = input('Enter file name: ')
if len(fname) < 1:
    fname = 'roster_data.json'

# Load JSON data
with open(fname) as f:
    json_data = json.load(f)

# Process JSON data and insert into tables
for entry in json_data:
    name, title, role = entry
    cur.execute('''INSERT OR IGNORE INTO User (name) VALUES (?)''', (name,))
    cur.execute('SELECT id FROM User WHERE name = ?', (name,))
    user_id = cur.fetchone()[0]
    cur.execute('''INSERT OR IGNORE INTO Course (title) VALUES (?)''', (title,))
    cur.execute('SELECT id FROM Course WHERE title = ?', (title,))
    course_id = cur.fetchone()[0]
    cur.execute('''INSERT OR REPLACE INTO Member (user_id, course_id, role) VALUES (?, ?, ?)''',
                (user_id, course_id, role))
    conn.commit()

# Execute the first SQL query
cur.execute('''
    SELECT User.name, Course.title, Member.role
    FROM User JOIN Member JOIN Course
    ON User.id = Member.user_id AND Member.course_id = Course.id
    ORDER BY User.name DESC, Course.title DESC, Member.role DESC
    LIMIT 2
''')

rows = cur.fetchall()
for row in rows:
    print('|'.join(str(value) for value in row))

# Execute the second SQL query
cur.execute('''
    SELECT 'XYZZY' || hex(User.name || Course.title || Member.role) AS X
    FROM User JOIN Member JOIN Course
    ON User.id = Member.user_id AND Member.course_id = Course.id
    ORDER BY X
    LIMIT 1
''')

result = cur.fetchone()[0]
print(result)

cur.close()

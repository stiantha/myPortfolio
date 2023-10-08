name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)

hour_counts = dict()

for line in handle:
    if line.startswith('From '):
        words = line.split()
        time = words[5]
        hour = time.split(':')[0]
        hour_counts[hour] = hour_counts.get(hour, 0) + 1

# Sort the hour counts by hour
sorted_counts = sorted(hour_counts.items())

for hour, count in sorted_counts:
    print(hour, count)
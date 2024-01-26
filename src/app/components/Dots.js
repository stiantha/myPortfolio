const radius = 4;
const gap = 16;

export default ({ width = 7, height = 7 } = {}) => {
    const svgWidth = (radius * 2 + gap) * width - gap;
    const svgHeight = (radius * 2 + gap) * height - gap;

    // Define the positions of the stars in the Orion constellation
    const stars = [
        { x: 4, y: 1 },
        { x: 6, y: 2 },
        { x: 3, y: 3 },
        { x: 6, y: 4 },
        { x: 3, y: 5 },
        { x: 9, y: 6 },
        { x: 1, y: 7 },
    ];

    return /*html*/ `
        <svg width="100%" class="dots" viewBox="0 0 ${svgWidth} ${svgHeight}">
            ${stars
                .map(star => {
                    const x = radius + star.x * (radius * 2 + gap);
                    const y = radius + star.y * (radius * 2 + gap);

                    return /*html*/ `<circle cx="${x}" cy="${y}" r="${radius}" />`;
                })
                .join("")}
        </svg>
    `;
};
function frames(val, mult) {
    const fps = 60;
    return (val * fps) * mult;
}

console.log(frames(10,25));
const choices = [1, 2, 4];
export const activity_Data = Array.from({ length: 32 }, () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
});

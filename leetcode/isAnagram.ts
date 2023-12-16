function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const anagram = s.split('');
    for (let i = 0; i < t.length; i++) {
        const letter = anagram.indexOf(t[i])
        if (letter !== -1) {
            anagram.splice(letter, 1);
        }
        if (anagram.length === 0) {
            return true
        }
    }
    return false;
};

function lengthOfLongestSubstring(s: string): number {
     let n = s.length;
    let maxLength = 0;
    let charSet = new Set();
    let left = 0;
    
    for (let right = 0; right < n; right++) {
        if (!charSet.has(s.charAt(right))) {
            charSet.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        } else {
            while (charSet.has(s.charAt(right))) {
                charSet.delete(s.charAt(left));
                left++;
            }
            charSet.add(s.charAt(right));
        }
    }
    
    return maxLength;
    
};
---
title: Leetcode's Longest Palindromic Substring
publishDate: 2024-06-10
description: Algorithm and Data Structure
author: Josh Q.
excerpt: >
  A reddit user asked about this problem. Curious, I tried solving it. From what I learned, this problem is a classic palindrome type. It's deceptively tricky, but rich with optimization opportunities. Here’s my thought, and my approach to the problem.
image:
src:
alt:
tags: ['LeetCode', 'Algorithm', 'Data Structure']
---

A reddit user asked about this problem. Curious, I tried solving it. From what I learned, this problem is a classic palindrome type. It's deceptively tricky, but rich with optimization opportunities. Here’s my thought, and my approach to the problem.

> Palindromes aren’t just wordplay—they’re a gateway to understanding dynamic programming, two-pointer strategies, and substring manipulation.

## What I Learned, Part 1

- Palindromes are an odd or an even character count string.
- Brute forcing it would mean checking each substring. Excruciatingly slow. O(n^3) Complexity.
- Can also be implemented with a boolean matrix approach. Start from each single character, then check if the doubles are palindromes - and so on... while tagging each matrix x,y entry with a true/false bit if it is found to be a palindrom. O(n^2) Complexity. I was happy but not that convinced.

Then I remembered something from my MSCS days. Manacher's Algorithm.

> The idea is, instead of checking each center naively, Manacher’s algorithm reuses previously computed palindrome information to skip redundant work.

```c# showLineNumbers
    StringBuilder newString = new("#");

    foreach (char c in s)
        newString.Append(c).Append('#');

    int length = newString.Length;
    int[] radii = new int[length];
    int center = 0;
    int radius = 0;

    for (int i = 0; i < length; i++)
    {
        int mirror = 2 * center - i;

        if (radius > i)
            radii[i] = Math.Min(radius - i, radii[mirror]);

        while (i + 1 + radii[i] < length && i - 1 - radii[i] >= 0
        && newString[i + 1 + radii[i]] == newString[i - 1 - radii[i]])
            radii[i]++;

        if (i + radii[i] > radius)
        {
            center = i;
            radius = i + radii[i];
        }
    }
```

An O(n) approach.

## What I Learned, Part 2

- Optimization isn’t always about speed. Sometimes it’s about clarity and maintainability.
- Center expansion is elegant and surprisingly performant.
- Edge cases (like even-length palindromes) are where most bugs were found. Make sure to check.

## Final Thoughts

This problem’s a great reminder that elegant solutions often emerge from pattern recognition, not brute force. This is a gem worth revisiting just to sharpen our DSA problem solving skills.

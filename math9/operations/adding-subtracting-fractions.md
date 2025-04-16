---
title: "Adding & Subtracting Fractions"
layout: "base.njk"
parent: "Math 9 - Operations"
tags: ["math9", "math9-operations", "math9-fractions"]
order: 2 # Keep the order established previously
---

Adding and subtracting fractions requires one crucial step: the fractions **must** have the same denominator, called a **common denominator**.

---

## Why Common Denominators?

Think of denominators as telling you the *size* of the pieces. You can't directly add or subtract pieces of different sizes (like adding $\frac{1}{2}$ and $\frac{1}{4}$) any more than you can directly add 1 apple and 1 orange and say you have "2 apple-oranges".

<div class="key-concept">
    <h4>Getting Common Denominators</h4>
    <p>To make the denominators the same, you need to find the <strong>Least Common Denominator (LCD)</strong>. This is the smallest number that both original denominators divide into evenly (their Least Common Multiple).</p>
    <p><strong>How to find the LCD (e.g., for $\frac{1}{4}$ and $\frac{5}{6}$):</strong></p>
    <ul>
        <li>List multiples of 4: 4, 8, <strong>12</strong>, 16, ...</li>
        <li>List multiples of 6: 6, <strong>12</strong>, 18, 24, ...</li>
        <li>The smallest number in both lists is 12. So, the LCD is 12.</li>
    </ul>
    <p>Once you find the LCD, rewrite each fraction as an equivalent fraction with that denominator.</p>
</div>

---

## The Steps for Adding/Subtracting Fractions

1.  **Convert (if needed):** Change any mixed numbers to improper fractions.
2.  **Find LCD:** Determine the Least Common Denominator for all fractions involved.
3.  **Rewrite Fractions:** Create equivalent fractions using the LCD. Remember to multiply the numerator by the same factor you multiplied the denominator by.
4.  **Add/Subtract Numerators:** Perform the addition or subtraction on the top numbers (numerators). Keep the common denominator.
5.  **Simplify:** Reduce the resulting fraction to its lowest terms. Convert back to a mixed number if appropriate.

---

### Reminder: Sign Rules

*   Adding a negative is the same as subtracting: $5 + (-3) = 5 - 3 = 2$
*   Subtracting a negative is the same as adding: $7 - (-2) = 7 + 2 = 9$
*   When adding/subtracting with different signs, think about number lines or "owing" money.
*   When signs are the same for addition (or after converting subtraction), add the values and keep the sign: $-4 - 5 = -9$

---

## Examples with Step-by-Step Solutions

<div class="example">
    <p><strong>Example 1:</strong> Calculate $\frac{2}{5} + \frac{1}{3}$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Find LCD and rewrite fractions:</p>
        $$
        \begin{align*}
        & \frac{2}{5} + \frac{1}{3} \quad & \text{(Denominators 5 and 3. LCD = 15)} \\
        = & \boxed{\frac{2 \times 3}{5 \times 3}} + \boxed{\frac{1 \times 5}{3 \times 5}} \quad & \text{(Rewrite with LCD)} \\
        = & \frac{6}{15} + \frac{5}{15} \\
        = & \frac{\boxed{6 + 5}}{15} \quad & \text{(Add Numerators)} \\
        = & \frac{11}{15}
        \end{align*}
        $$
        <p><em>Result: $\frac{11}{15}$ (already simplified)</em></p>
    </div>
</div>

<div class="example">
    <p><strong>Example 2:</strong> Calculate $-\frac{1}{4} - \frac{5}{6}$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Find LCD and watch the signs:</p>
        $$
        \begin{align*}
        & -\frac{1}{4} - \frac{5}{6} \quad & \text{(Denominators 4 and 6. LCD = 12)} \\
        = & \boxed{-\frac{1 \times 3}{4 \times 3}} - \boxed{\frac{5 \times 2}{6 \times 2}} \quad & \text{(Rewrite with LCD)} \\
        = & -\frac{3}{12} - \frac{10}{12} \\
        = & \frac{\boxed{-3 - 10}}{12} \quad & \text{(Subtract Numerators: -3 take away 10)} \\
        = & \frac{-13}{12}
        \end{align*}
        $$
        <p><em>Result: $-\frac{13}{12}$ or $-1\frac{1}{12}$</em></p>
    </div>
</div>

<div class="example">
    <p><strong>Example 3:</strong> Calculate $2\frac{1}{2} - \left(-\frac{3}{4}\right)$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Convert mixed number and simplify signs first:</p>
        $$
        \begin{align*}
        & \boxed{2\frac{1}{2}} - \left(-\frac{3}{4}\right) \quad & \text{(Convert mixed to improper: } \frac{5}{2}) \\
        = & \frac{5}{2} - \left(-\frac{3}{4}\right) \\
        = & \boxed{\frac{5}{2} + \frac{3}{4}} \quad & \text{(Subtracting a negative is adding)} \\
          & \quad & \text{(Denominators 2 and 4. LCD = 4)} \\
        = & \boxed{\frac{5 \times 2}{2 \times 2}} + \frac{3}{4} \quad & \text{(Rewrite first fraction with LCD)} \\
        = & \frac{10}{4} + \frac{3}{4} \\
        = & \frac{\boxed{10 + 3}}{4} \quad & \text{(Add Numerators)} \\
        = & \frac{13}{4}
        \end{align*}
        $$
        <p><em>Result: $\frac{13}{4}$ or $3\frac{1}{4}$</em></p>
    </div>
</div>


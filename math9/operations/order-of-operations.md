---
title: "Order of Operations (BEDMAS)"
layout: "base.njk"
parent: "Math 9 - Operations" #
tags: ["math9", "math9-operations"]
order: 1
---

When a mathematical expression has multiple operations, we need a specific sequence to follow so that everyone arrives at the same answer. This sequence is called the **Order of Operations**.

---

## The BEDMAS Rule

The acronym **BEDMAS** helps us remember the correct order:

<div class="bedmas-steps">
    <div class="step">
        <h3 class="step-letter">B</h3>
        <div class="step-details">
            <h4>Brackets (or Parentheses)</h4>
            <p>Calculate everything inside grouping symbols first. Work from the innermost pair outwards. Examples: `( )`, `[ ]`, `{ }`.</p>
            <p class="step-example"><em>Example: $10 - (\mathbf{2+3}) \rightarrow 10 - 5 = 5$</em></p>
        </div>
    </div>

    <div class="step">
        <h3 class="step-letter">E</h3>
        <div class="step-details">
            <h4>Exponents</h4>
            <p>Evaluate any powers (numbers raised to an exponent).</p>
            <p class="step-example"><em>Example: $5 + \mathbf{3^2} \rightarrow 5 + 9 = 14$</em></p>
        </div>
    </div>

    <div class="step">
        <h3 class="step-letter">DM</h3>
        <div class="step-details">
            <h4>Division & Multiplication</h4>
            <p>These have **equal priority**. Perform them as they appear, working from **LEFT to RIGHT**.</p>
            <p class="step-example"><em>Ex 1 (Division first): $12 \div \mathbf{6 \times 2} \rightarrow \mathbf{2} \times 2 = 4$</em></p>
            <p class="step-example"><em>Ex 2 (Multiplication first): $10 \times \mathbf{4 \div 5} \rightarrow \mathbf{40} \div 5 = 8$</em></p>
        </div>
    </div>

    <div class="step">
        <h3 class="step-letter">AS</h3>
        <div class="step-details">
            <h4>Addition & Subtraction</h4>
            <p>These also have **equal priority**. Perform them as they appear, working from **LEFT to RIGHT**.</p>
            <p class="step-example"><em>Ex 1 (Subtraction first): $9 - \mathbf{4 + 2} \rightarrow \mathbf{5} + 2 = 7$</em></p>
            <p class="step-example"><em>Ex 2 (Addition first): $5 + \mathbf{6 - 3} \rightarrow \mathbf{11} - 3 = 8$</em></p>
        </div>
    </div>
</div>

---

### Key Points & Common Mistakes:

*   **Left-to-Right Rule:** Always work from left to right when dealing with operations of equal priority (DM or AS).
*   **Exponents on Negatives:** Be careful! $(-3)^2 = (-3) \times (-3) = 9$. The brackets mean the exponent applies to the negative base. BUT $-3^2 = -(3 \times 3) = -9$. Without brackets, the exponent applies only to the 3.
*   **Implied Multiplication:** $2(3+4)$ means $2 \times (3+4)$. Do the brackets first: $2(7) = 14$.

---

## Examples with Step-by-Step Solutions

*(The example divs remain the same as in the previous version, using \boxed{} for steps)*

<div class="example">
    <p><strong>Example 1:</strong> Simplify $3 + 5 \times 2$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Following BEDMAS:</p>
        $$
        \begin{align*}
        & 3 + \boxed{5 \times 2} \quad &\text{(M: Multiplication before Addition)} \\
        = & 3 + 10 \\
        = & \boxed{13} \quad &\text{(A: Addition)}
        \end{align*}
        $$
        <p><em>Result: $13$</em></p>
    </div>
</div>

<div class="example">
    <p><strong>Example 2:</strong> Simplify $(3 + 5) \times 2$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Following BEDMAS:</p>
        $$
        \begin{align*}
         & \boxed{(3 + 5)} \times 2 \quad &\text{(B: Brackets first)} \\
        = & 8 \times 2 \\
        = & \boxed{16} \quad &\text{(M: Multiplication)}
        \end{align*}
        $$
        <p><em>Result: $16$</em></p>
    </div>
</div>

<div class="example">
    <p><strong>Example 3:</strong> Simplify $10 - 6 \div 2 + 4^2$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Step-by-step using BEDMAS:</p>
        $$
        \begin{align*}
         & 10 - 6 \div 2 + \boxed{4^2} \quad & \text{(E: Exponents)} \\
        = & 10 - 6 \div 2 + 16 \\
         & 10 - \boxed{6 \div 2} + 16 \quad & \text{(D/M: Division, left-to-right)} \\
        = & 10 - 3 + 16 \\
         & \boxed{10 - 3} + 16 \quad & \text{(A/S: Subtraction, left-to-right)}\\
        = & 7 + 16 \\
         & \boxed{7 + 16} \quad & \text{(A/S: Addition, left-to-right)}\\
        = & 23
        \end{align*}
        $$
        <p><em>Result: $23$</em></p>
    </div>
</div>

<div class="example">
    <p><strong>Example 4 (Nested Brackets):</strong> Simplify $20 - [12 \div (2 + 4)]$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Work from the innermost brackets outwards:</p>
        $$
        \begin{align*}
        & 20 - [12 \div \boxed{(2 + 4)}] \quad & \text{(B: Innermost Bracket)} \\
        = & 20 - [12 \div 6] \\
        = & 20 - \boxed{[12 \div 6]} \quad & \text{(B: Remaining Bracket - Perform Division inside)} \\
        = & 20 - 2 \\
        = & \boxed{18} \quad & \text{(S: Subtraction)}
        \end{align*}
        $$
        <p><em>Result: $18$</em></p>
    </div>
</div>

<div class="example">
    <p><strong>Example 5 (Exponents & Negatives):</strong> Simplify $5 + (-2)^3 - 3^2$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Watch the exponents carefully:</p>
        $$
        \begin{align*}
        & 5 + \boxed{(-2)^3} - \boxed{3^2} \quad & \text{(E: Exponents)} \\
          & \quad \text{Note: } (-2)^3 = (-2)(-2)(-2) = -8 \\
          & \quad \text{Note: } 3^2 = 3 \times 3 = 9 \\
        = & 5 + (-8) - 9 \\
        = & 5 - 8 - 9 \\
        = & \boxed{5 - 8} - 9 \quad & \text{(A/S: Subtraction, left-to-right)} \\
        = & -3 - 9 \\
        = & \boxed{-3 - 9} \quad & \text{(A/S: Subtraction)} \\
        = & -12
        \end{align*}
        $$
        <p><em>Result: $-12$</em></p>
    </div>
</div>


<div class="example">
    <p><strong>Example 6 (Fractions & Mixed Operations):</strong> Simplify $\left(-\frac{3}{4}\right) \div \frac{1}{5} + \left(\left(-\frac{1}{3}\right) \times \left(-\frac{5}{2}\right)\right)$</p>
    <button class="solution-toggle" aria-expanded="false">Show Solution</button>
    <div class="solution" hidden>
        <p>Follow BEDMAS with fraction rules:</p>
         $$
        \begin{align*}
        & \left(-\frac{3}{4}\right) \div \frac{1}{5} + \boxed{\left(\left(-\frac{1}{3}\right) \times \left(-\frac{5}{2}\right)\right)} \quad & \text{(B: Innermost Bracket - Multiplication)} \\
          & \quad \text{Calculation: } (-\frac{1}{3}) \times (-\frac{5}{2}) = +\frac{1 \times 5}{3 \times 2} = \frac{5}{6} \\
        = & \left(-\frac{3}{4}\right) \div \frac{1}{5} + \frac{5}{6} \\
        = & \boxed{\left(-\frac{3}{4}\right) \div \frac{1}{5}} + \frac{5}{6} \quad & \text{(D/M: Division - Keep, Change, Flip)} \\
          & \quad \text{Calculation: } (-\frac{3}{4}) \times \frac{5}{1} = -\frac{3 \times 5}{4 \times 1} = -\frac{15}{4} \\
        = & -\frac{15}{4} + \frac{5}{6} \\
        = & \boxed{-\frac{15}{4} + \frac{5}{6}} \quad & \text{(A/S: Addition - Find LCD = 12)} \\
          & \quad \text{Calculation: } -\frac{15 \times 3}{4 \times 3} + \frac{5 \times 2}{6 \times 2} = -\frac{45}{12} + \frac{10}{12} \\
          & \quad = \frac{-45 + 10}{12} = -\frac{35}{12} \\
        = & -\frac{35}{12}
        \end{align*}
        $$
        <p><em>Result: $-\frac{35}{12}$ or $-2\frac{11}{12}$</em></p>
    </div>
</div>

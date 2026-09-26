import { CodeBlock } from "@/components/code-block";

export default function GettingStartedWithPython() {
  return (
    <article>
      <h1>Getting Started with Python</h1>

      <p>By Md. Sadman Sami Khan · Beginner guide</p>

      <p>
        Python is a programming language used for automation, web development,
        data analysis, and artificial intelligence. This guide introduces its
        basic syntax through small, practical examples.
      </p>

      <h2>1. Check your Python installation</h2>

      <p>
        Install Python from the official Python website if it is not already
        available on your computer. Then open a terminal and check the installed
        version:
      </p>

      <CodeBlock
        language="terminal"
        code="python --version"
      />

      <p>
        Depending on your installation, you may need to use{" "}
        <code>python3</code> or <code>py</code> instead of{" "}
        <code>python</code>.
      </p>

      <h2>2. Write your first program</h2>

      <p>
        Create a file named <code>hello.py</code> and add:
      </p>

      <CodeBlock
        language="python"
        code={`print("Hello, Python!")`}
      />

      <p>
        Save the file. Open a terminal in the same folder and run:
      </p>

      <CodeBlock
        language="terminal"
        code="python hello.py"
      />

      <p>The output will be:</p>

      <CodeBlock
        language="output"
        code="Hello, Python!"
      />

      <h2>3. Variables and data types</h2>

      <p>
        Variables are names that refer to values. You can assign a value using
        the equals sign:
      </p>

      <CodeBlock
        language="python"
        code={`name = "Sadman"       # String: text
age = 23              # Integer: a whole number
height = 1.75         # Float: a decimal number
is_learning = True    # Boolean: True or False

print(name)
print(age)`}
      />

      <p>
        Text is written inside quotation marks. Python’s Boolean values use
        capital letters: <code>True</code> and <code>False</code>.
      </p>

      <h2>4. Get input from the user</h2>

      <p>
        The <code>input()</code> function reads text entered by the user:
      </p>

      <CodeBlock
        language="python"
        code={`name = input("What is your name? ")
print(f"Hello, {name}!")`}
      />

      <p>
        An f-string lets you insert values into text using curly braces.
      </p>

      <h3>Convert text to a number</h3>

      <p>
        Input is returned as a string. Convert it before doing numerical
        calculations:
      </p>

      <CodeBlock
        language="python"
        code={`age = int(input("Enter your age: "))
print(f"Next year, you will be {age + 1}.")`}
      />

      <blockquote>
        <p>
          This example expects a whole number. Entering text such as “twenty”
          will cause a ValueError.
        </p>
      </blockquote>

      <h2>5. Make decisions with conditions</h2>

      <p>
        Use <code>if</code> and <code>else</code> to choose which code runs:
      </p>

      <CodeBlock
        language="python"
        code={`score = 75

if score >= 50:
    print("You passed.")
else:
    print("Keep practicing.")`}
      />

      <p>
        Indentation defines code blocks in Python. Use four spaces consistently
        inside each block.
      </p>

      <h2>6. Repeat actions with loops</h2>

      <p>
        A <code>for</code> loop repeats an action for each item in a sequence:
      </p>

      <CodeBlock
        language="python"
        code={`for number in range(1, 6):
    print(number)`}
      />

      <p>
        This prints 1 through 5. The ending value, 6, is excluded.
      </p>

      <h2>7. Store multiple values in a list</h2>

      <p>
        Lists hold multiple items. List indexing starts at zero:
      </p>

      <CodeBlock
        language="python"
        code={`languages = ["Python", "JavaScript", "Java"]

print(languages[0])  # Python

languages.append("C++")

for language in languages:
    print(language)`}
      />

      <h2>8. Create a function</h2>

      <p>
        Functions organize reusable code. Use <code>def</code> to define a
        function and <code>return</code> to send a result back:
      </p>

      <CodeBlock
        language="python"
        code={`def add_numbers(first, second):
    return first + second

result = add_numbers(10, 20)
print(result)  # 30`}
      />

      <h2>9. Try a small practice task</h2>

      <p>
        Write a program that asks for two numbers and prints their sum. Try it
        yourself before opening the example.
      </p>

      <details>
        <summary>Show example solution</summary>

        <CodeBlock
          language="python"
          code={`first = float(input("Enter the first number: "))
second = float(input("Enter the second number: "))

total = first + second

print(f"The sum is {total}")`}
        />
      </details>

      <h2>Conclusion</h2>

      <p>
        You have covered output, variables, input, conditions, loops, lists, and
        functions. Practice by changing these examples and building small
        programs of your own.
      </p>
    </article>
  );
}
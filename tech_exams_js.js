const technicalExams = {
  exam1: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
    questions: [
      // ----------------- C/C++ (12 questions) -----------------
      // --- Code-based (6) ---
      {
        id: 1,
        question:
          "What will be the output of the following code?\n```cpp\n#include <iostream>\nusing namespace std;\nvoid func(int &x) { x += 5; }\nint main() {\n    int a = 3;\n    func(a);\n    cout << a;\n}\n```",
        options: { a: "3", b: "5", c: "8", d: "Compilation Error" },
        correct: "c",
      },
      {
        id: 2,
        question:
          "Given the code:\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int *p = arr + 2;\n    cout << *(p - 1);\n}\n``` What is printed?",
        options: { a: "1", b: "2", c: "3", d: "4" },
        correct: "b",
      },
      {
        id: 3,
        question:
          "Consider:\n```cpp\n#include <iostream>\nusing namespace std;\nint f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 1);\n}\nint main() {\n    cout << f(4);\n}\n``` Output?",
        options: { a: "10", b: "24", c: "120", d: "None of the above" },
        correct: "b",
      },
      {
        id: 4,
        question:
          "What is the output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int x = 2;\n    cout << x++ * ++x;\n}\n```",
        options: { a: "6", b: "8", c: "9", d: "Undefined Behavior" },
        correct: "d",
      },
      {
        id: 5,
        question:
          'Given:\n```cpp\n#include <iostream>\nusing namespace std;\nvoid print(int x = 5, int y = 10){ cout << x << " " << y; }\nint main(){ print(3); }\n``` Output?',
        options: { a: "3 0", b: "3 10", c: "5 10", d: "Error" },
        correct: "b",
      },
      {
        id: 6,
        question:
          "What will this print?\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int x = 1;\n    while (x < 5) x += x++;\n    cout << x;\n}\n```",
        options: { a: "5", b: "6", c: "7", d: "8" },
        correct: "b",
      },

      // --- Theory (6) ---
      {
        id: 7,
        question:
          "Which of the following is NOT a stage in the compilation process in C++?",
        options: {
          a: "Lexical Analysis",
          b: "Linking",
          c: "Optimization",
          d: "Garbage Collection",
        },
        correct: "d",
      },
      {
        id: 8,
        question: "In C++, which storage class has the longest lifetime?",
        options: { a: "auto", b: "register", c: "static", d: "extern" },
        correct: "c",
      },
      {
        id: 9,
        question: "Which correctly describes pass-by-reference?",
        options: {
          a: "A copy of the value is passed",
          b: "A reference to the original is passed",
          c: "A constant value is passed",
          d: "None of the above",
        },
        correct: "b",
      },
      {
        id: 10,
        question: "Friend functions in C++:",
        options: {
          a: "Can access private and protected members",
          b: "Are inherited by child classes",
          c: "Can be virtual",
          d: "Must be member functions",
        },
        correct: "a",
      },
      {
        id: 11,
        question: "Which memory region stores dynamically allocated variables?",
        options: {
          a: "Stack",
          b: "Heap",
          c: "Code segment",
          d: "Static segment",
        },
        correct: "b",
      },
      {
        id: 12,
        question: "Header files in C++:",
        options: {
          a: "Contain only class definitions",
          b: "Contain both definitions and implementations",
          c: "Should be included in other header files",
          d: "Usually contain declarations",
        },
        correct: "d",
      },

      // ----------------- Pseudocode & Flowchart Logic (5) -----------------
      {
        id: 13,
        question:
          "Pseudocode:\n```\ncount ← 0\nfor i ← 1 to 4\n  for j ← 1 to i\n    count ← count + 1\nprint count\n```\nOutput?",
        options: { a: "4", b: "6", c: "8", d: "10" },
        correct: "b",
      },
      {
        id: 14,
        question:
          "Pseudocode:\n```\nx ← 5\ny ← 0\nwhile x > 0\ny ← y + x\nx ← x - 2\nprint y\n```\nOutput?",
        options: { a: "5", b: "9", c: "12", d: "15" },
        correct: "c",
      },
      {
        id: 15,
        question:
          "Pseudocode:\n```\nfor i ← 2 to 5\n  if i mod 2 = 0 then\n    print i\n```\nWhat is printed?",
        options: {
          a: "2 4",
          b: "2 3 4 5",
          c: "Even numbers from 2 to 5",
          d: "Error",
        },
        correct: "a",
      },
      {
        id: 16,
        question:
          "A flowchart has a decision diamond with 'x > 5?'. If YES, it goes to 'Print High', else 'Print Low'. What is printed if x = 5?",
        options: { a: "High", b: "Low", c: "Error", d: "Nothing" },
        correct: "b",
      },
      {
        id: 17,
        question: "In a flowchart, a parallelogram represents:",
        options: {
          a: "Decision",
          b: "Start/End",
          c: "Input/Output",
          d: "Process",
        },
        correct: "c",
      },

      // ----------------- SQL (12 questions) -----------------
      // Code-based (6)
      {
        id: 18,
        question:
          "What will be the result?\n```sql\nSELECT COUNT(*) FROM Employees WHERE department = 'HR' AND salary > 50000;\n```",
        options: {
          a: "Number of HR employees",
          b: "Number of HR employees with salary > 50000",
          c: "Sum of salaries",
          d: "All employees with salary > 50000",
        },
        correct: "b",
      },
      {
        id: 19,
        question:
          "Given tables Orders and Customers, which query finds all customers without orders?\n",
        options: {
          a: "SELECT * FROM Customers c JOIN Orders o ON c.id = o.cid;",
          b: "SELECT * FROM Customers WHERE id NOT IN (SELECT cid FROM Orders);",
          c: "SELECT * FROM Customers WHERE id IN Orders;",
          d: "SELECT * FROM Customers EXCEPT SELECT * FROM Orders;",
        },
        correct: "b",
      },
      {
        id: 20,
        question:
          "What is output?\n```sql\nSELECT department, COUNT(*) FROM Employees GROUP BY department HAVING COUNT(*) > 5;\n```",
        options: {
          a: "Departments with >5 employees",
          b: "All departments",
          c: "First 5 employees per department",
          d: "Error",
        },
        correct: "a",
      },
      {
        id: 21,
        question:
          "Given:\n```sql\nSELECT name FROM Employees WHERE salary BETWEEN 40000 AND 60000;\n``` This returns:",
        options: {
          a: "Employees earning 40000 only",
          b: "Employees earning exactly 60000",
          c: "Employees earning between 40000 and 60000 inclusive",
          d: "None",
        },
        correct: "c",
      },
      {
        id: 22,
        question:
          "Which query returns total salary per department sorted by total salary descending?",
        options: {
          a: "SELECT department, SUM(salary) FROM Employees GROUP BY department ORDER BY SUM(salary) DESC;",
          b: "SELECT department, salary FROM Employees ORDER BY salary DESC;",
          c: "SELECT department, AVG(salary) FROM Employees;",
          d: "SELECT department FROM Employees;",
        },
        correct: "a",
      },
      {
        id: 23,
        question:
          "Given:\n```sql\nSELECT * FROM Products WHERE price > ALL (SELECT price FROM Products WHERE category = 'Electronics');\n``` This returns:",
        options: {
          a: "All products",
          b: "Products with price higher than every Electronics item",
          c: "Products cheaper than Electronics",
          d: "Electronics only",
        },
        correct: "b",
      },

      // Theory (6)
      {
        id: 24,
        question: "In SQL, `HAVING` is used:",
        options: {
          a: "To filter before grouping",
          b: "To filter after grouping",
          c: "As a replacement for WHERE",
          d: "For ordering results",
        },
        correct: "b",
      },
      {
        id: 25,
        question: "Which is DDL?",
        options: { a: "SELECT", b: "INSERT", c: "CREATE", d: "UPDATE" },
        correct: "c",
      },
      {
        id: 26,
        question: "`COMMIT` in SQL means:",
        options: {
          a: "Save transaction changes",
          b: "Undo transaction changes",
          c: "Lock table",
          d: "Exit database",
        },
        correct: "a",
      },
      {
        id: 27,
        question: "Indexing improves:",
        options: {
          a: "Insert speed",
          b: "Delete speed",
          c: "Select speed",
          d: "Data integrity",
        },
        correct: "c",
      },
      {
        id: 28,
        question: "Which is NOT a transaction property?",
        options: {
          a: "Atomicity",
          b: "Consistency",
          c: "Isolation",
          d: "Durability",
          e: "Concurrency",
        },
        correct: "e",
      },
      {
        id: 29,
        question: "Which statement is true about query optimization?",
        options: {
          a: "It guarantees faster execution",
          b: "It may rewrite queries internally",
          c: "It removes indexes",
          d: "It only applies to DDL",
        },
        correct: "b",
      },

      // ----------------- HTML/CSS (5 questions) -----------------
      {
        id: 30,
        question:
          "What does this render?\n```html\n<p style='color:red'><span style='color:blue'>Text</span></p>\n```",
        options: { a: "Red text", b: "Blue text", c: "Black text", d: "Error" },
        correct: "b",
      },
      {
        id: 31,
        question: "Which media query targets screens under 600px?",
        options: {
          a: "@media screen and (max-width: 600px)",
          b: "@media screen and (min-width: 600px)",
          c: "@media only print",
          d: "None",
        },
        correct: "a",
      },
      {
        id: 32,
        question:
          "Given:\n```css\np { color: blue; }\n#id1 { color: red; }\n<p id='id1'>Hello</p>\n``` What is the text color?",
        options: { a: "Blue", b: "Red", c: "Black", d: "Undefined" },
        correct: "b",
      },
      {
        id: 33,
        question: "Which tag is semantic?",
        options: { a: "<div>", b: "<section>", c: "<span>", d: "<b>" },
        correct: "b",
      },
      {
        id: 34,
        question: "CSS specificity order (highest to lowest):",
        options: {
          a: "Element < Class < ID",
          b: "ID < Class < Element",
          c: "Class < ID < Element",
          d: "None",
        },
        correct: "a",
      },

      // ----------------- OOP (8 questions) -----------------
      // Code-based (4)
      {
        id: 35,
        question:
          'What is printed?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A {\npublic: A(){ cout<<"A"; } ~A(){ cout<<"a"; }\n};\nclass B: public A {\npublic: B(){ cout<<"B"; } ~B(){ cout<<"b"; }\n};\nint main(){ B obj; }\n```',
        options: { a: "ABab", b: "BAab", c: "ABba", d: "BAba" },
        correct: "a",
      },
      {
        id: 36,
        question:
          'Given:\n```cpp\n#include <iostream>\nusing namespace std;\nclass Base { public: virtual void show(){ cout<<"Base"; } };\nclass Derived: public Base { public: void show(){ cout<<"Derived"; } };\nint main(){ Base *b = new Derived(); b->show(); }\n``` Output?',
        options: { a: "Base", b: "Derived", c: "Error", d: "Undefined" },
        correct: "b",
      },
      {
        id: 37,
        question:
          'What is output?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A { public: virtual void f(){ cout<<"A"; } };\nclass B: public A { public: void f(){ cout<<"B"; } };\nint main(){ A a; B b; a = b; a.f(); }\n```',
        options: { a: "A", b: "B", c: "Error", d: "Undefined" },
        correct: "a",
      },
      {
        id: 38,
        question: "Multiple inheritance ambiguity is resolved using:",
        options: {
          a: "Overloading",
          b: "Virtual Inheritance",
          c: "Friend functions",
          d: "Abstract classes",
        },
        correct: "b",
      },

      // Theory (4)
      {
        id: 39,
        question: "Encapsulation in OOP means:",
        options: {
          a: "Combining data and methods",
          b: "Hiding implementation details",
          c: "Allowing multiple forms",
          d: "Inheritance",
        },
        correct: "b",
      },
      {
        id: 40,
        question: "Polymorphism allows:",
        options: {
          a: "One name, many forms",
          b: "One form, many names",
          c: "Multiple inheritance only",
          d: "Encapsulation",
        },
        correct: "a",
      },
      {
        id: 41,
        question: "Abstraction in OOP is:",
        options: {
          a: "Hiding irrelevant details",
          b: "Encapsulation",
          c: "Overloading operators",
          d: "Overriding functions",
        },
        correct: "a",
      },
      {
        id: 42,
        question: "A 'has-a' relationship in OOP is:",
        options: {
          a: "Association",
          b: "Composition",
          c: "Inheritance",
          d: "Polymorphism",
        },
        correct: "b",
      },

      // ----------------- Algorithms (8 questions) -----------------
      // Theory (4)
      {
        id: 43,
        question:
          "Which sorting algorithm is stable and has O(n log n) time complexity?",
        options: {
          a: "QuickSort",
          b: "MergeSort",
          c: "HeapSort",
          d: "SelectionSort",
        },
        correct: "b",
      },
      {
        id: 44,
        question: "DFS is best used when:",
        options: {
          a: "Shortest path is needed",
          b: "Exploring all paths deeply first",
          c: "Level-order traversal",
          d: "Finding connected components",
        },
        correct: "b",
      },
      {
        id: 45,
        question: "Dijkstra's algorithm is:",
        options: {
          a: "Greedy",
          b: "Divide and conquer",
          c: "Dynamic programming",
          d: "Backtracking",
        },
        correct: "a",
      },
      {
        id: 46,
        question: "Which is NOT a comparison-based sorting algorithm?",
        options: {
          a: "QuickSort",
          b: "MergeSort",
          c: "CountingSort",
          d: "HeapSort",
        },
        correct: "c",
      },

      // Code-based (4)
      {
        id: 47,
        question:
          "What is output?\n```cpp\n#include <iostream>\n#include <queue>\nusing namespace std;\nint main(){ queue<int> q; q.push(1); q.push(2); q.push(3); q.pop(); cout << q.front(); }\n```",
        options: { a: "1", b: "2", c: "3", d: "Error" },
        correct: "b",
      },
      {
        id: 48,
        question:
          "Given adjacency list representation, BFS visits nodes in which order for a simple connected graph?",
        options: {
          a: "Depth-first",
          b: "Breadth-first",
          c: "Random",
          d: "Sorted by value",
        },
        correct: "b",
      },
      {
        id: 49,
        question: "In QuickSort, the pivot selection affects:",
        options: {
          a: "Time complexity",
          b: "Space complexity",
          c: "Stability",
          d: "Heap property",
        },
        correct: "a",
      },
      {
        id: 50,
        question: "Given array [4, 2, 1, 3], one merge sort pass produces:",
        options: {
          a: "[4,2] [1,3]",
          b: "[2,4] [1,3]",
          c: "[1,2,3,4]",
          d: "[4,3,2,1]",
        },
        correct: "b",
      },
    ],
  },
  exam2: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
    questions: [
      // C/C++ Questions (12 total: 6 code-based, 6 theory)
      {
        id: 1,
        question: `What is the output of the following C++ code?
\`\`\`cpp
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr + 2;
    cout << *(p - 1) + *(p + 1) << endl;
    return 0;
}
\`\`\``,
        options: {
          a: "5",
          b: "6",
          c: "7",
          d: "8",
        },
        correct: "b",
      },
      {
        id: 2,
        question: `What does this recursive function return for f(4)?
\`\`\`cpp
int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 2);
}
\`\`\``,
        options: {
          a: "8",
          b: "12",
          c: "16",
          d: "24",
        },
        correct: "a",
      },
      {
        id: 3,
        question: `What is the output?
\`\`\`cpp
void modify(int &x, int y) {
    x = x + y;
    y = x - y;
}
int main() {
    int a = 10, b = 5;
    modify(a, b);
    cout << a << " " << b << endl;
    return 0;
}
\`\`\``,
        options: {
          a: "10 5",
          b: "15 5",
          c: "15 10",
          d: "10 10",
        },
        correct: "b",
      },
      {
        id: 4,
        question: `What is the final value of sum?
\`\`\`cpp
int sum = 0;
for (int i = 1; i <= 3; ++i) {
    for (int j = i; j <= 4; ++j) {
        sum += i * j;
    }
}
\`\`\``,
        options: {
          a: "50",
          b: "60",
          c: "70",
          d: "80",
        },
        correct: "c",
      },
      {
        id: 5,
        question: `What is the output due to operator precedence?
\`\`\`cpp
int a = 2, b = 3, c = 4;
int result = a + b * c / 2 - 1;
cout << result << endl;
\`\`\``,
        options: {
          a: "7",
          b: "8",
          c: "9",
          d: "10",
        },
        correct: "b",
      },
      {
        id: 6,
        question: `Trace the function calls. What is printed last?
\`\`\`cpp
void func(int n) {
    if (n > 0) {
        cout << n << " ";
        func(n - 2);
        cout << n << " ";
    }
}
// Called with func(5)
\`\`\``,
        options: {
          a: "1",
          b: "3",
          c: "5",
          d: "Nothing",
        },
        correct: "c",
      },
      {
        id: 7,
        question:
          "In C++, what happens when you delete a pointer twice without setting it to nullptr?",
        options: {
          a: "The program continues normally",
          b: "Undefined behavior occurs",
          c: "A compilation error is generated",
          d: "The memory is freed twice safely",
        },
        correct: "b",
      },
      {
        id: 8,
        question: "Which variables have global scope in a C++ program?",
        options: {
          a: "Variables declared inside main() function",
          b: "Variables declared outside all functions",
          c: "Variables declared with static keyword only",
          d: "Variables declared in header files only",
        },
        correct: "b",
      },
      {
        id: 9,
        question: "What is the correct order of C++ compilation stages?",
        options: {
          a: "Preprocessing → Compilation → Assembly → Linking",
          b: "Compilation → Preprocessing → Linking → Assembly",
          c: "Preprocessing → Assembly → Compilation → Linking",
          d: "Assembly → Preprocessing → Compilation → Linking",
        },
        correct: "a",
      },
      {
        id: 10,
        question:
          "What is the main difference between header files (.h) and source files (.cpp)?",
        options: {
          a: "Header files contain only function declarations, source files contain definitions",
          b: "Header files are compiled separately from source files",
          c: "Source files cannot include header files",
          d: "Header files are executed at runtime, source files at compile time",
        },
        correct: "a",
      },
      {
        id: 11,
        question:
          "What is the key difference between pass-by-value and pass-by-reference in C++?",
        options: {
          a: "Pass-by-value is faster than pass-by-reference",
          b: "Pass-by-reference creates a copy, pass-by-value doesn't",
          c: "Pass-by-value creates a copy, pass-by-reference uses the original variable",
          d: "There is no difference in C++",
        },
        correct: "c",
      },
      {
        id: 12,
        question: "What is the primary purpose of friend classes in C++?",
        options: {
          a: "To inherit from multiple base classes",
          b: "To allow access to private and protected members of another class",
          c: "To prevent inheritance from a class",
          d: "To create virtual functions",
        },
        correct: "b",
      },

      // Pseudocode & Flowchart Logic (5 questions)
      {
        id: 13,
        question: `What is the final value of result after this pseudocode executes?
\`\`\`
result = 0
for i = 1 to 4
    for j = 1 to i
        result = result + i * j
    end for
end for
\`\`\``,
        options: {
          a: "50",
          b: "60",
          c: "70",
          d: "80",
        },
        correct: "a",
      },
      {
        id: 14,
        question: `What does this pseudocode calculate?
\`\`\`
count = 0
x = 20
while x > 0
    if x mod 2 = 0
        count = count + 1
    x = x / 2
end while
\`\`\``,
        options: {
          a: "Number of even digits in 20",
          b: "Number of times 20 can be divided by 2",
          c: "Number of bits in binary representation of 20",
          d: "Sum of even numbers up to 20",
        },
        correct: "b",
      },
      {
        id: 15,
        question: `Given this nested loop pseudocode, what is the value of sum?
\`\`\`
sum = 0
for i = 1 to 3
    for j = i to 3
        sum = sum + (i + j)
    end for
end for
\`\`\``,
        options: {
          a: "24",
          b: "30",
          c: "36",
          d: "42",
        },
        correct: "c",
      },
      {
        id: 16,
        question:
          "In a flowchart, what does a diamond shape typically represent?",
        options: {
          a: "Process or computation",
          b: "Input/Output operation",
          c: "Decision or condition",
          d: "Start or end of algorithm",
        },
        correct: "c",
      },
      {
        id: 17,
        question:
          "In flowchart logic, if a loop condition is checked at the beginning, it's called:",
        options: {
          a: "Post-test loop",
          b: "Pre-test loop",
          c: "Infinite loop",
          d: "Nested loop",
        },
        correct: "b",
      },

      // SQL Questions (12 total: 6 code-based, 6 theory)
      {
        id: 18,
        question: `Given tables: Orders(id, customer_id, amount) and Customers(id, name). What does this query return?
\`\`\`sql
SELECT c.name, COUNT(o.id) as order_count
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
HAVING COUNT(o.id) > 2;
\`\`\``,
        options: {
          a: "All customers with their order counts",
          b: "Only customers who have more than 2 orders",
          c: "All customers with exactly 2 orders",
          d: "Only customers with no orders",
        },
        correct: "b",
      },
      {
        id: 19,
        question: `What is the result of this SQL query?
\`\`\`sql
SELECT department, AVG(salary) as avg_salary
FROM employees 
WHERE salary > 50000
GROUP BY department
HAVING AVG(salary) > 60000;
\`\`\``,
        options: {
          a: "All departments with average salary > 60000",
          b: "Departments where employees earn > 50000 and dept average > 60000",
          c: "All employees earning > 60000",
          d: "Departments with any employee earning > 50000",
        },
        correct: "b",
      },
      {
        id: 20,
        question: `What does this subquery return?
\`\`\`sql
SELECT name FROM students 
WHERE grade > (
    SELECT AVG(grade) 
    FROM students 
    WHERE class = 'Math'
);
\`\`\``,
        options: {
          a: "Students with above average grade in Math class",
          b: "All students with grade higher than Math class average",
          c: "Students in Math class only",
          d: "Students with the highest grade",
        },
        correct: "b",
      },
      {
        id: 21,
        question: `Given Products(id, category, price), what's the output?
\`\`\`sql
SELECT category, COUNT(*) as count
FROM Products 
WHERE price BETWEEN 100 AND 500
GROUP BY category
ORDER BY count DESC;
\`\`\``,
        options: {
          a: "Categories with product count, ordered by count descending",
          b: "Only categories with products priced 100-500, ordered by count",
          c: "All categories ordered alphabetically",
          d: "Products in each category with their prices",
        },
        correct: "b",
      },
      {
        id: 22,
        question: `What happens with this JOIN?
\`\`\`sql
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
WHERE e.salary > 75000;
\`\`\``,
        options: {
          a: "Shows all employees regardless of department",
          b: "Shows employees earning >75000 with their department names",
          c: "Shows all departments with high-earning employees",
          d: "Creates a Cartesian product",
        },
        correct: "b",
      },
      {
        id: 23,
        question: `What's wrong with this query structure?
\`\`\`sql
SELECT customer_name, order_date
FROM customers, orders
WHERE customers.id = orders.customer_id
GROUP BY customer_name;
\`\`\``,
        options: {
          a: "Missing HAVING clause",
          b: "order_date not in GROUP BY clause",
          c: "Wrong JOIN syntax",
          d: "Nothing is wrong",
        },
        correct: "b",
      },
      {
        id: 24,
        question:
          "What is the main difference between WHERE and HAVING clauses in SQL?",
        options: {
          a: "WHERE filters rows before grouping, HAVING filters groups after grouping",
          b: "HAVING is faster than WHERE",
          c: "WHERE is used with aggregate functions, HAVING is not",
          d: "There is no difference",
        },
        correct: "a",
      },
      {
        id: 25,
        question: "In SQL transactions, what does ROLLBACK do?",
        options: {
          a: "Saves all changes permanently",
          b: "Undoes all changes since the last COMMIT",
          c: "Deletes the entire database",
          d: "Creates a backup of the database",
        },
        correct: "b",
      },
      {
        id: 26,
        question:
          "Which of the following is a DDL (Data Definition Language) command?",
        options: {
          a: "SELECT",
          b: "INSERT",
          c: "UPDATE",
          d: "CREATE",
        },
        correct: "d",
      },
      {
        id: 27,
        question: "What is the primary benefit of database indexing?",
        options: {
          a: "Reduces storage space",
          b: "Improves query performance",
          c: "Prevents data corruption",
          d: "Enables data encryption",
        },
        correct: "b",
      },
      {
        id: 28,
        question:
          "Which technique is most effective for optimizing slow SELECT queries?",
        options: {
          a: "Adding more columns to SELECT",
          b: "Using DISTINCT on all columns",
          c: "Adding appropriate indexes on WHERE clause columns",
          d: "Using subqueries instead of JOINs",
        },
        correct: "c",
      },
      {
        id: 29,
        question: "When should you use HAVING instead of WHERE in a SQL query?",
        options: {
          a: "When filtering individual rows",
          b: "When using aggregate functions in the condition",
          c: "When joining multiple tables",
          d: "When sorting results",
        },
        correct: "b",
      },

      // HTML/CSS Questions (5 total: 3 code-based, 2 theory)
      {
        id: 30,
        question: `What color will the paragraph text be?
\`\`\`css
#content { color: blue !important; }
.highlight { color: red; }
p { color: green; }
\`\`\`
\`\`\`html
<div id="content">
    <p class="highlight">Sample text</p>
</div>
\`\`\``,
        options: {
          a: "Red",
          b: "Blue",
          c: "Green",
          d: "Black (default)",
        },
        correct: "c",
      },
      {
        id: 31,
        question: `What happens with this CSS specificity conflict?
\`\`\`css
.container .box { background: red; }
div.box { background: blue; }
#main .box { background: green; }
\`\`\`
\`\`\`html
<div id="main" class="container">
    <div class="box">Content</div>
</div>
\`\`\``,
        options: {
          a: "Red background",
          b: "Blue background",
          c: "Green background",
          d: "No background",
        },
        correct: "c",
      },
      {
        id: 32,
        question: `What happens with this media query?
\`\`\`css
@media (max-width: 768px) {
    .sidebar { display: none; }
}
@media (min-width: 769px) {
    .sidebar { width: 25%; }
}
\`\`\``,
        options: {
          a: "Sidebar hidden on screens wider than 768px",
          b: "Sidebar visible only between 768px and 769px",
          c: "Sidebar hidden on screens 768px and below",
          d: "Sidebar always visible with 25% width",
        },
        correct: "c",
      },
      {
        id: 33,
        question:
          "Which HTML5 semantic tag is most appropriate for a site's main navigation menu?",
        options: {
          a: "<menu>",
          b: "<nav>",
          c: "<navigation>",
          d: "<header>",
        },
        correct: "b",
      },
      {
        id: 34,
        question:
          "What is the primary purpose of the 'alt' attribute in HTML img tags?",
        options: {
          a: "To provide a tooltip on hover",
          b: "To specify image dimensions",
          c: "To provide alternative text for screen readers and accessibility",
          d: "To set the image loading priority",
        },
        correct: "c",
      },

      // OOP Questions (8 total: 4 code-based, 4 theory)
      {
        id: 35,
        question: `What is the output of this C++ code?
\`\`\`cpp
class Base {
public:
    Base() { cout << "Base "; }
    ~Base() { cout << "~Base "; }
};
class Derived : public Base {
public:
    Derived() { cout << "Derived "; }
    ~Derived() { cout << "~Derived "; }
};
int main() {
    Derived d;
    return 0;
}
\`\`\``,
        options: {
          a: "Base Derived ~Base ~Derived",
          b: "Base Derived ~Derived ~Base",
          c: "Derived Base ~Derived ~Base",
          d: "Derived Base ~Base ~Derived",
        },
        correct: "b",
      },
      {
        id: 36,
        question: `What does this virtual function code output?
\`\`\`cpp
class Animal {
public:
    virtual void sound() { cout << "Animal sound"; }
};
class Dog : public Animal {
public:
    void sound() override { cout << "Woof"; }
};
int main() {
    Animal* ptr = new Dog();
    ptr->sound();
    delete ptr;
    return 0;
}
\`\`\``,
        options: {
          a: "Animal sound",
          b: "Woof",
          c: "Compilation error",
          d: "Both Animal sound and Woof",
        },
        correct: "b",
      },
      {
        id: 37,
        question: `What happens with method overriding here?
\`\`\`cpp
class Parent {
public:
    void show() { cout << "Parent "; }
    virtual void display() { cout << "Parent display "; }
};
class Child : public Parent {
public:
    void show() { cout << "Child "; }
    void display() override { cout << "Child display "; }
};
int main() {
    Parent* p = new Child();
    p->show();
    p->display();
    delete p;
    return 0;
}
\`\`\``,
        options: {
          a: "Parent Parent display",
          b: "Child Child display",
          c: "Parent Child display",
          d: "Child Parent display",
        },
        correct: "c",
      },
      {
        id: 38,
        question: `What is the issue with multiple inheritance here?
\`\`\`cpp
class A {
public:
    void func() { cout << "A"; }
};
class B {
public:
    void func() { cout << "B"; }
};
class C : public A, public B {
    // No func() defined
};
int main() {
    C obj;
    obj.func(); // What happens?
    return 0;
}
\`\`\``,
        options: {
          a: "Prints A",
          b: "Prints B",
          c: "Compilation error due to ambiguity",
          d: "Runtime error",
        },
        correct: "c",
      },
      {
        id: 39,
        question: "What is encapsulation in object-oriented programming?",
        options: {
          a: "Creating multiple objects from one class",
          b: "Hiding internal implementation details and exposing only necessary interfaces",
          c: "Inheriting properties from parent class",
          d: "Using the same interface for different underlying forms",
        },
        correct: "b",
      },
      {
        id: 40,
        question:
          "Which OOP principle allows a child class to inherit properties and methods from a parent class?",
        options: {
          a: "Encapsulation",
          b: "Polymorphism",
          c: "Inheritance",
          d: "Abstraction",
        },
        correct: "c",
      },
      {
        id: 41,
        question: "What is polymorphism in OOP?",
        options: {
          a: "Having multiple constructors in a class",
          b: "The ability of objects to take multiple forms and respond to the same interface differently",
          c: "Creating private variables in a class",
          d: "Inheriting from multiple base classes",
        },
        correct: "b",
      },
      {
        id: 42,
        question: "What does abstraction mean in object-oriented programming?",
        options: {
          a: "Making all class members private",
          b: "Creating objects from classes",
          c: "Hiding complex implementation details and showing only essential features",
          d: "Using inheritance to extend functionality",
        },
        correct: "c",
      },

      // Algorithms Questions (8 total: 4 theory, 4 code-based)
      {
        id: 43,
        question:
          "Which algorithm has O(n log n) average time complexity and is based on divide-and-conquer strategy?",
        options: {
          a: "Bubble Sort",
          b: "Selection Sort",
          c: "Quick Sort",
          d: "Insertion Sort",
        },
        correct: "c",
      },
      {
        id: 44,
        question:
          "What is the key difference between stable and unstable sorting algorithms?",
        options: {
          a: "Stable algorithms are faster than unstable ones",
          b: "Stable algorithms preserve the relative order of equal elements",
          c: "Unstable algorithms use less memory",
          d: "Stable algorithms only work on integers",
        },
        correct: "b",
      },
      {
        id: 45,
        question:
          "Which algorithm type is Dijkstra's shortest path algorithm classified as?",
        options: {
          a: "Divide and Conquer",
          b: "Dynamic Programming",
          c: "Greedy Algorithm",
          d: "Backtracking",
        },
        correct: "c",
      },
      {
        id: 46,
        question:
          "When should you use DFS (Depth-First Search) over BFS (Breadth-First Search)?",
        options: {
          a: "When you need the shortest path",
          b: "When memory is limited and you need to explore deep paths",
          c: "When finding all nodes at a specific distance",
          d: "When working with weighted graphs only",
        },
        correct: "b",
      },
      {
        id: 47,
        question: `What is the BFS traversal order starting from node A?
Graph: A-B, A-C, B-D, C-E, D-F
\`\`\`
    A
   / \\
  B   C
  |   |
  D   E
  |
  F
\`\`\``,
        options: {
          a: "A, B, C, D, E, F",
          b: "A, B, D, F, C, E",
          c: "A, C, E, B, D, F",
          d: "A, B, C, F, D, E",
        },
        correct: "a",
      },
      {
        id: 48,
        question: `Using Dijkstra's algorithm, what is the shortest distance from A to D?
Graph weights: A-B(2), A-C(4), B-C(1), B-D(7), C-D(3)`,
        options: {
          a: "6",
          b: "7",
          c: "8",
          d: "9",
        },
        correct: "a",
      },
      {
        id: 49,
        question: `What is the minimum spanning tree weight using Prim's algorithm?
Graph: A-B(1), A-C(3), B-C(2), B-D(4), C-D(5)`,
        options: {
          a: "7",
          b: "8",
          c: "10",
          d: "15",
        },
        correct: "a",
      },
      {
        id: 50,
        question: `Trace QuickSort with pivot as first element. What is the array after first partition?
Initial array: [5, 2, 8, 1, 9, 3]`,
        options: {
          a: "[2, 1, 3, 5, 8, 9]",
          b: "[2, 1, 3, 5, 9, 8]",
          c: "[1, 2, 3, 5, 8, 9]",
          d: "[3, 2, 1, 5, 8, 9]",
        },
        correct: "a",
      },
    ],
  },
  exam3: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
    questions: [
      // C/C++ Questions (12 total: 6 code-based, 6 syntax-oriented theory)
      {
        id: 1,
        question: `What is the output of the following C++ code?
\`\`\`cpp
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = &arr[2];
    cout << *(p - 1) + *(p + 2) << endl;
    return 0;
}
\`\`\``,
        options: {
          a: "60",
          b: "70",
          c: "80",
          d: "90",
        },
        correct: "b",
      },
      {
        id: 2,
        question: `What does this recursive function return for mystery(5)?
\`\`\`cpp
int mystery(int n) {
    if (n <= 2) return n;
    return mystery(n-1) + mystery(n-2);
}
\`\`\``,
        options: {
          a: "5",
          b: "8",
          c: "13",
          d: "21",
        },
        correct: "b",
      },
      {
        id: 3,
        question: `What is the output?
\`\`\`cpp
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
int main() {
    int x = 15, y = 25;
    swap(x, y);
    cout << x << " " << y << endl;
    return 0;
}
\`\`\``,
        options: {
          a: "15 25",
          b: "25 15",
          c: "15 15",
          d: "25 25",
        },
        correct: "b",
      },
      {
        id: 4,
        question: `What is the final value of result?
\`\`\`cpp
int result = 1;
for (int i = 2; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        result += i * j;
    }
}
\`\`\``,
        options: {
          a: "49",
          b: "59",
          c: "69",
          d: "79",
        },
        correct: "c",
      },
      {
        id: 5,
        question: `What is the output due to operator precedence?
\`\`\`cpp
int a = 3, b = 4, c = 5;
int result = a * b + c / 2 % 3 - 1;
cout << result << endl;
\`\`\``,
        options: {
          a: "13",
          b: "14",
          c: "15",
          d: "16",
        },
        correct: "b",
      },
      {
        id: 6,
        question: `Trace the function calls. What is the complete output?
\`\`\`cpp
void print(int n) {
    if (n > 0) {
        cout << n << " ";
        print(n - 2);
        cout << n << " ";
    }
}
// Called with print(4)
\`\`\``,
        options: {
          a: "4 2 2 4",
          b: "4 2 4 2",
          c: "2 4 2 4",
          d: "4 2",
        },
        correct: "a",
      },
      {
        id: 7,
        question:
          "What is the purpose of the scope resolution operator (::) in C++?",
        options: {
          a: "To access private members of a class",
          b: "To define the scope of variables and functions",
          c: "To create pointers to member functions",
          d: "To perform pointer arithmetic",
        },
        correct: "b",
      },
      {
        id: 8,
        question:
          "What does the 'explicit' keyword do when used with constructors?",
        options: {
          a: "Makes the constructor private",
          b: "Prevents implicit type conversions using the constructor",
          c: "Allows multiple inheritance",
          d: "Makes the constructor virtual",
        },
        correct: "b",
      },
      {
        id: 9,
        question:
          "What is the main difference between 'struct' and 'class' in C++?",
        options: {
          a: "struct cannot have constructors",
          b: "struct members are public by default, class members are private by default",
          c: "struct cannot have methods",
          d: "struct is for C compatibility only",
        },
        correct: "b",
      },
      {
        id: 10,
        question: "What does the 'mutable' keyword allow in C++?",
        options: {
          a: "Modification of const objects",
          b: "Modification of member variables in const member functions",
          c: "Dynamic memory allocation",
          d: "Multiple inheritance",
        },
        correct: "b",
      },
      {
        id: 11,
        question: "What does the sizeof operator return in C++?",
        options: {
          a: "The number of elements in an array",
          b: "The memory address of a variable",
          c: "The size in bytes of a type or variable",
          d: "The length of a string",
        },
        correct: "c",
      },
      {
        id: 12,
        question:
          "What is the correct placement for preprocessor directives like #include?",
        options: {
          a: "Inside function definitions",
          b: "At the top of the source file, before any code",
          c: "After the main function",
          d: "Only in header files",
        },
        correct: "b",
      },

      // Pseudocode & Flowchart Logic (5 questions)
      {
        id: 13,
        question: `What is the final value of sum after this pseudocode executes?
\`\`\`
sum = 0
for i = 1 to 3
    for j = i to 4
        sum = sum + (i * j)
    end for
end for
\`\`\``,
        options: {
          a: "40",
          b: "50",
          c: "60",
          d: "70",
        },
        correct: "b",
      },
      {
        id: 14,
        question: `What does this pseudocode calculate?
\`\`\`
result = 1
number = 16
while number > 1
    number = number / 2
    result = result + 1
end while
\`\`\``,
        options: {
          a: "Square root of 16",
          b: "Number of divisions by 2 until reaching 1",
          c: "Log base 2 of 16 plus 1",
          d: "Sum of powers of 2",
        },
        correct: "c",
      },
      {
        id: 15,
        question: `Given this nested condition pseudocode, what is the value of output?
\`\`\`
x = 8, y = 12, output = 0
if x < 10 then
    if y > 10 then
        output = x + y
    else
        output = x * y
    end if
else
    output = x - y
end if
\`\`\``,
        options: {
          a: "-4",
          b: "20",
          c: "96",
          d: "4",
        },
        correct: "b",
      },
      {
        id: 16,
        question:
          "In a standard flowchart, which shape is used to represent a decision or condition?",
        options: {
          a: "Rectangle",
          b: "Oval",
          c: "Diamond",
          d: "Parallelogram",
        },
        correct: "c",
      },
      {
        id: 17,
        question: "What does a parallelogram shape represent in a flowchart?",
        options: {
          a: "Process or computation",
          b: "Start or end of the algorithm",
          c: "Decision point",
          d: "Input or output operation",
        },
        correct: "d",
      },

      // SQL Questions (12 total: 6 code-based, 6 theory)
      {
        id: 18,
        question: `Given tables: Products(id, name, category_id, price) and Categories(id, name). What does this query return?
\`\`\`sql
SELECT c.name, COUNT(p.id) as product_count, AVG(p.price) as avg_price
FROM Categories c
LEFT JOIN Products p ON c.id = p.category_id
GROUP BY c.id, c.name
HAVING COUNT(p.id) >= 3 AND AVG(p.price) > 100;
\`\`\``,
        options: {
          a: "All categories with their product counts",
          b: "Categories with at least 3 products and average price > 100",
          c: "Products grouped by category with price > 100",
          d: "Categories with exactly 3 products",
        },
        correct: "b",
      },
      {
        id: 19,
        question: `What is the result of this correlated subquery?
\`\`\`sql
SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);
\`\`\``,
        options: {
          a: "Employees earning above company average",
          b: "Employees earning above their department's average",
          c: "Highest paid employee in each department",
          d: "All employees with their department averages",
        },
        correct: "b",
      },
      {
        id: 20,
        question: `Given Orders(id, customer_id, order_date, amount), what does this query return?
\`\`\`sql
SELECT customer_id, COUNT(*) as order_count
FROM Orders
WHERE order_date >= '2024-01-01'
    AND amount > 500
GROUP BY customer_id
HAVING COUNT(*) > 2
ORDER BY COUNT(*) DESC;
\`\`\``,
        options: {
          a: "All customers with their order counts",
          b: "Customers with >2 orders since 2024, each order >$500",
          c: "Top 2 customers by order count",
          d: "Customers who spent >$500 total",
        },
        correct: "b",
      },
      {
        id: 21,
        question: `What happens with this INNER JOIN?
\`\`\`sql
SELECT s.name, c.course_name, e.grade
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id
WHERE e.grade >= 90;
\`\`\``,
        options: {
          a: "Shows all students regardless of enrollment",
          b: "Shows students with grades >= 90 and their course info",
          c: "Shows all courses with high-performing students",
          d: "Creates a Cartesian product",
        },
        correct: "b",
      },
      {
        id: 22,
        question: `What's the output of this window function?
\`\`\`sql
SELECT name, salary, 
       RANK() OVER (ORDER BY salary DESC) as salary_rank
FROM employees
WHERE department = 'IT';
\`\`\``,
        options: {
          a: "IT employees ordered by salary ascending",
          b: "IT employees with their salary ranks (1 for highest)",
          c: "Top ranked employee from IT department",
          d: "All employees with IT department rank",
        },
        correct: "b",
      },
      {
        id: 23,
        question: `What's wrong with this aggregate query?
\`\`\`sql
SELECT customer_id, order_date, COUNT(*) as total_orders
FROM orders
WHERE order_date > '2024-01-01'
GROUP BY customer_id;
\`\`\``,
        options: {
          a: "Missing HAVING clause",
          b: "order_date should be in GROUP BY or removed from SELECT",
          c: "WHERE clause is incorrect",
          d: "COUNT(*) syntax is wrong",
        },
        correct: "b",
      },
      {
        id: 24,
        question: "When can you use aggregate functions in a WHERE clause?",
        options: {
          a: "Always, without restrictions",
          b: "Never, aggregate functions must be in HAVING",
          c: "Only with subqueries",
          d: "Only with GROUP BY",
        },
        correct: "b",
      },
      {
        id: 25,
        question:
          "What happens when you execute ROLLBACK in a SQL transaction?",
        options: {
          a: "Commits all pending changes",
          b: "Undoes changes back to the last savepoint or transaction start",
          c: "Locks the database for other users",
          d: "Creates a backup of current state",
        },
        correct: "b",
      },
      {
        id: 26,
        question:
          "Which command is classified as DML (Data Manipulation Language)?",
        options: {
          a: "CREATE TABLE",
          b: "ALTER TABLE",
          c: "UPDATE",
          d: "DROP INDEX",
        },
        correct: "c",
      },
      {
        id: 27,
        question: "What is the primary trade-off of adding database indexes?",
        options: {
          a: "Faster SELECT queries but slower INSERT/UPDATE/DELETE operations",
          b: "Better data integrity but more complex queries",
          c: "Reduced storage space but slower queries",
          d: "Improved security but reduced performance",
        },
        correct: "a",
      },
      {
        id: 28,
        question:
          "Which is the most effective strategy for optimizing a slow JOIN query?",
        options: {
          a: "Add DISTINCT to eliminate duplicates",
          b: "Use UNION instead of JOIN",
          c: "Ensure indexes exist on JOIN columns",
          d: "Replace with multiple subqueries",
        },
        correct: "c",
      },
      {
        id: 29,
        question:
          "What is the key difference between clustered and non-clustered indexes?",
        options: {
          a: "Clustered indexes are faster than non-clustered",
          b: "Clustered index determines physical storage order, non-clustered doesn't",
          c: "Non-clustered indexes use more memory",
          d: "Clustered indexes can only be created on primary keys",
        },
        correct: "b",
      },

      // HTML/CSS Questions (5 total: 3 code-based, 2 theory)
      {
        id: 30,
        question: `What color will the h1 text be?
\`\`\`css
.header h1 { color: blue; }
#main .header h1 { color: red; }
h1 { color: green !important; }
\`\`\`
\`\`\`html
<div id="main">
    <div class="header">
        <h1>Title</h1>
    </div>
</div>
\`\`\``,
        options: {
          a: "Blue",
          b: "Red",
          c: "Green",
          d: "Black (default)",
        },
        correct: "c",
      },
      {
        id: 31,
        question: `What happens with this CSS grid layout?
\`\`\`css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}
.item { background: lightblue; }
\`\`\`
\`\`\`html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
\`\`\``,
        options: {
          a: "Three equal columns",
          b: "Three columns: middle is twice as wide as sides",
          c: "Items stacked vertically",
          d: "Only the first item is displayed",
        },
        correct: "b",
      },
      {
        id: 32,
        question: `What happens with these media queries?
\`\`\`css
.box { width: 100px; height: 100px; }
@media (max-width: 600px) {
    .box { background: red; }
}
@media (max-width: 400px) {
    .box { background: blue; }
}
\`\`\``,
        options: {
          a: "Box is red on screens 400-600px, blue below 400px",
          b: "Box is blue on screens 400-600px, red below 400px",
          c: "Box is always blue on small screens",
          d: "Media queries conflict and don't work",
        },
        correct: "a",
      },
      {
        id: 33,
        question:
          "Which HTML5 semantic element is most appropriate for a standalone piece of content that could be distributed independently?",
        options: {
          a: "<section>",
          b: "<div>",
          c: "<article>",
          d: "<aside>",
        },
        correct: "c",
      },
      {
        id: 34,
        question:
          "What is the primary purpose of the 'aria-label' attribute in HTML?",
        options: {
          a: "To provide visual labels for form inputs",
          b: "To create tooltips for elements",
          c: "To provide accessible names for screen readers when visible text is insufficient",
          d: "To define the language of the element content",
        },
        correct: "c",
      },

      // OOP Questions (8 total: 4 code-based, 4 theory)
      {
        id: 35,
        question: `What is the output of this constructor/destructor sequence?
\`\`\`cpp
class A {
public:
    A() { cout << "A+ "; }
    ~A() { cout << "A- "; }
};
class B : public A {
public:
    B() { cout << "B+ "; }
    ~B() { cout << "B- "; }
};
int main() {
    B obj;
    return 0;
}
\`\`\``,
        options: {
          a: "A+ B+ A- B-",
          b: "A+ B+ B- A-",
          c: "B+ A+ B- A-",
          d: "B+ A+ A- B-",
        },
        correct: "b",
      },
      {
        id: 36,
        question: `What does this virtual function demonstrate?
\`\`\`cpp
class Shape {
public:
    virtual double area() { return 0; }
    double perimeter() { return 0; }
};
class Circle : public Shape {
public:
    double area() override { return 3.14; }
    double perimeter() { return 6.28; }
};
int main() {
    Shape* s = new Circle();
    cout << s->area() << " " << s->perimeter();
    delete s;
    return 0;
}
\`\`\``,
        options: {
          a: "0 0",
          b: "3.14 6.28",
          c: "3.14 0",
          d: "0 6.28",
        },
        correct: "c",
      },
      {
        id: 37,
        question: `What happens with this method overriding?
\`\`\`cpp
class Base {
public:
    virtual void show() { cout << "Base "; }
    void display() { cout << "Base display "; }
};
class Derived : public Base {
public:
    void show() override { cout << "Derived "; }
    void display() { cout << "Derived display "; }
};
int main() {
    Base* ptr = new Derived();
    ptr->show();
    ptr->display();
    delete ptr;
    return 0;
}
\`\`\``,
        options: {
          a: "Base Base display",
          b: "Derived Derived display",
          c: "Derived Base display",
          d: "Base Derived display",
        },
        correct: "c",
      },
      {
        id: 38,
        question: `What is the issue with this multiple inheritance scenario?
\`\`\`cpp
class X {
public:
    int value;
    X() : value(10) {}
};
class Y : public X {};
class Z : public X {};
class W : public Y, public Z {
public:
    void setValue() { value = 20; } // What's wrong?
};
\`\`\``,
        options: {
          a: "Missing virtual inheritance",
          b: "Ambiguity: W has two copies of X::value",
          c: "Constructor not defined in W",
          d: "Private inheritance needed",
        },
        correct: "b",
      },
      {
        id: 39,
        question:
          "What is the main benefit of encapsulation in object-oriented programming?",
        options: {
          a: "Allows multiple inheritance",
          b: "Data hiding and controlled access to class members",
          c: "Enables polymorphic behavior",
          d: "Reduces memory usage",
        },
        correct: "b",
      },
      {
        id: 40,
        question:
          "What type of inheritance relationship does 'is-a' represent?",
        options: {
          a: "Composition",
          b: "Aggregation",
          c: "Public inheritance",
          d: "Private inheritance",
        },
        correct: "c",
      },
      {
        id: 41,
        question:
          "Which type of polymorphism is achieved through virtual functions in C++?",
        options: {
          a: "Compile-time polymorphism",
          b: "Runtime polymorphism",
          c: "Static polymorphism",
          d: "Template polymorphism",
        },
        correct: "b",
      },
      {
        id: 42,
        question: "What is the primary purpose of abstract classes in OOP?",
        options: {
          a: "To reduce memory usage",
          b: "To provide a common interface and prevent direct instantiation",
          c: "To enable multiple inheritance",
          d: "To improve performance",
        },
        correct: "b",
      },

      // Algorithms Questions (8 total: 4 theory, 4 code-based)
      {
        id: 43,
        question:
          "Which sorting algorithm is stable, adaptive, and has O(n) best-case time complexity?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Heap Sort",
        },
        correct: "c",
      },
      {
        id: 44,
        question:
          "What algorithmic strategy does Prim's Minimum Spanning Tree algorithm use?",
        options: {
          a: "Divide and Conquer",
          b: "Dynamic Programming",
          c: "Greedy Algorithm",
          d: "Backtracking",
        },
        correct: "c",
      },
      {
        id: 45,
        question:
          "When is DFS (Depth-First Search) preferred over BFS (Breadth-First Search)?",
        options: {
          a: "When finding shortest path in unweighted graphs",
          b: "When memory is limited and exploring deep paths",
          c: "When finding all nodes at same level",
          d: "When graph has cycles",
        },
        correct: "b",
      },
      {
        id: 46,
        question:
          "What is the space complexity of the recursive implementation of Merge Sort?",
        options: {
          a: "O(1)",
          b: "O(log n)",
          c: "O(n)",
          d: "O(n log n)",
        },
        correct: "c",
      },
      {
        id: 47,
        question: `What is the DFS traversal order starting from node A?
Graph connections: A-B, A-C, B-D, B-E, C-F
(Visit children in alphabetical order)
\`\`\`
    A
   / \\
  B   C
 / |   |
D  E   F
\`\`\``,
        options: {
          a: "A, B, D, E, C, F",
          b: "A, B, C, D, E, F",
          c: "A, C, F, B, E, D",
          d: "A, B, E, D, C, F",
        },
        correct: "a",
      },
      {
        id: 48,
        question: `Using Dijkstra's algorithm, what is the shortest path distance from A to E?
Graph: A-B(3), A-C(2), B-D(4), B-E(6), C-D(1), C-E(8), D-E(2)`,
        options: {
          a: "5",
          b: "7",
          c: "9",
          d: "11",
        },
        correct: "a",
      },
      {
        id: 49,
        question: `What edges are selected by Prim's MST algorithm starting from vertex A?
Graph: A-B(4), A-C(2), B-C(3), B-D(5), C-D(1)`,
        options: {
          a: "A-C(2), C-D(1), D-B(5)",
          b: "A-C(2), C-D(1), C-B(3)",
          c: "A-B(4), B-C(3), C-D(1)",
          d: "A-C(2), C-B(3), B-D(5)",
        },
        correct: "b",
      },
      {
        id: 50,
        question: `Trace Merge Sort. What is the array after the first merge step?
Initial array: [38, 27, 43, 3, 9, 82, 10]
(Consider the leftmost subarray split)`,
        options: {
          a: "[27, 38, 43, 3, 9, 82, 10]",
          b: "[27, 38, 3, 43, 9, 82, 10]",
          c: "[3, 27, 38, 43, 9, 82, 10]",
          d: "[27, 38, 9, 43, 3, 82, 10]",
        },
        correct: "a",
      },
    ],
  },

  exam4: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
    questions: [
      // ==== C/C++ (12) ====
      {
        id: 1,
        question:
          'C++ pointers: What is the output?\n\n```cpp\n#include <iostream>\nusing namespace std;\nvoid f(int *p){ (*p)++; }\nint main(){ int x=10; int *q=&x; f(q); cout<<x<<" "<<*q; }\n```',
        options: {
          a: "10 10",
          b: "11 11",
          c: "10 11",
          d: "11 10",
        },
        correct: "b",
      },
      {
        id: 2,
        question:
          "C++ recursion & operator precedence: What prints?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint g(int n){ return n? n%2 + g(n/2) : 0; }\nint main(){ cout << g(13) * 2 + 1;\n}\n```",
        options: {
          a: "5",
          b: "7",
          c: "9",
          d: "11",
        },
        correct: "c",
      },
      {
        id: 3,
        question:
          'C++ references & lifetime: Identify the bug.\n\n```cpp\nconst string& foo(){\n  string s = "tmp";\n  return s; // ???\n}\nint main(){ auto &r = foo(); }\n```\nWhich statement is correct?',
        options: {
          a: "Legal: returns reference-to-const extends lifetime",
          b: "UB: dangling reference to local variable",
          c: "OK after C++17 due to RVO on references",
          d: "Well-defined if compiled with -O2",
        },
        correct: "b",
      },
      {
        id: 4,
        question:
          'Loop & short-circuit: What is printed?\n\n```cpp\n#include <iostream>\nint main(){\n  int a=0,b=0;\n  for(int i=0;i<3 && ++a;++i){ b+=i; }\n  std::cout<<a<<" "<<b;\n}\n```',
        options: {
          a: "3 3",
          b: "1 0",
          c: "3 3 (if -O2 only)",
          d: "3 3? No, 3 3 is wrong; actual is 3 3",
        },
        correct: "a",
      },
      {
        id: 5,
        question:
          'Function call tracing & default arguments:\n\n```cpp\n#include <iostream>\nvoid f(int x=1){ std::cout<<x; }\nvoid f(char){ std::cout<<"C"; }\nint main(){ f(); }\n```\nWhat prints?',
        options: {
          a: "1",
          b: "C",
          c: "Ambiguous overload",
          d: "Compilation error: default argument redeclared",
        },
        correct: "a",
      },
      {
        id: 6,
        question:
          'Pointer arithmetic & sizeof (LP64):\n\n```cpp\n#include <iostream>\nint main(){\n  int a[5]={0,1,2,3,4};\n  int *p=a+1; long diff = (a+4)-p; \n  std::cout<<diff<<" "<<sizeof(a);\n}\n```\nAssume LP64 (sizeof(int)=4).',
        options: {
          a: "3 20",
          b: "3 16",
          c: "2 20",
          d: "2 16",
        },
        correct: "a",
      },
      // C++ theory (syntax-oriented)
      {
        id: 7,
        question:
          "C++ operator meaning: What does the scope resolution operator `::` primarily do?",
        options: {
          a: "Select a member from a pointer to object",
          b: "Disambiguate global or namespace scope for a name",
          c: "Bind to right-hand operand in a ternary expression",
          d: "Access pointer-to-member",
        },
        correct: "b",
      },
      {
        id: 8,
        question:
          "Keyword semantics: `explicit` on a constructor prevents which behavior by default?",
        options: {
          a: "Virtual dispatch",
          b: "Copy elision",
          c: "Implicit narrowing conversions",
          d: "Implicit converting constructor calls",
        },
        correct: "d",
      },
      {
        id: 9,
        question: "`struct` vs `class` syntax rules in C++: Which is true?",
        options: {
          a: "Both are identical; the only difference is default access (public vs private)",
          b: "`struct` cannot have methods",
          c: "`class` cannot be a template",
          d: "`struct` cannot inherit",
        },
        correct: "a",
      },
      {
        id: 10,
        question: "Which declaration is invalid in standard C++?",
        options: {
          a: "int *p = nullptr, &r = *p;",
          b: "int a = 0, b(a);",
          c: "int x{}; // zero-init",
          d: "int& rr; // reference without initializer",
        },
        correct: "d",
      },
      {
        id: 11,
        question: "Pointer-to-member operator: What does `int C::* pm;` mean?",
        options: {
          a: "Pointer to any member function of C returning int",
          b: "Pointer to a non-static data member of C of type int",
          c: "Pointer to an object of type C named pm",
          d: "Reference to an int inside C",
        },
        correct: "b",
      },
      {
        id: 12,
        question: "Preprocessor directives: Which is valid and best placement?",
        options: {
          a: "`#pragma once` inside a function body",
          b: "`#include <vector>` only at global scope before uses",
          c: "`#define` must appear after all declarations",
          d: "`#ifdef` cannot guard header content",
        },
        correct: "b",
      },

      // ==== Pseudocode & Flowchart Logic (5) ====
      {
        id: 13,
        question:
          "Pseudocode loop result:\n\n```text\nsum ← 0\nfor i ← 1 to 5 do\n  if i % 2 = 0 then sum ← sum + i*i\nend for\nprint sum\n```\nWhat prints?",
        options: {
          a: "10",
          b: "20",
          c: "30",
          d: "54",
        },
        correct: "b",
      },
      {
        id: 14,
        question:
          'Pseudocode with nested conditions:\n\n```text\nx ← 3; y ← 4\nif x*y > 10 then\n  if x < y then print "A" else print "B"\nelse\n  print "C"\n```\nOutput?',
        options: {
          a: "A",
          b: "B",
          c: "C",
          d: "No output",
        },
        correct: "a",
      },
      {
        id: 15,
        question:
          "Pseudocode while-loop:\n\n```text\nn ← 13; c ← 0\nwhile n > 1 do\n  n ← floor(n/2)\n  c ← c + 1\nend while\nprint c\n```\nWhat prints?",
        options: {
          a: "2",
          b: "3",
          c: "4",
          d: "5",
        },
        correct: "b",
      },
      {
        id: 16,
        question:
          "Flowchart symbols: Which shape represents a Decision (Yes/No branching)?",
        options: {
          a: "Oval",
          b: "Rectangle",
          c: "Diamond",
          d: "Parallelogram",
        },
        correct: "c",
      },
      {
        id: 17,
        question:
          "Flowchart symbols: Which shape is used for Input/Output operations?",
        options: {
          a: "Parallelogram",
          b: "Rectangle",
          c: "Diamond",
          d: "Oval",
        },
        correct: "a",
      },

      // ==== SQL (12) ====
      {
        id: 18,
        question:
          "SQL JOIN output reasoning:\n\n```sql\nSELECT a.id, b.val\nFROM A a LEFT JOIN B b ON a.id = b.a_id\nWHERE b.val IS NULL;\n```\nWhat rows are returned?",
        options: {
          a: "Only rows where A.id has matching B.a_id",
          b: "Rows from A that have no matching B (anti-semi join)",
          c: "All rows from B with null a_id",
          d: "Cartesian product of A and B",
        },
        correct: "b",
      },
      {
        id: 19,
        question:
          "Aggregate & HAVING:\n\n```sql\nSELECT dept, COUNT(*) c\nFROM emp\nGROUP BY dept\nHAVING COUNT(*) >= 3;\n```\nWhich is true?",
        options: {
          a: "Filters rows before grouping",
          b: "Filters groups after aggregation",
          c: "Equivalent to WHERE COUNT(*) >= 3",
          d: "Invalid without DISTINCT",
        },
        correct: "b",
      },
      {
        id: 20,
        question:
          "Tricky WHERE with NULLs:\n\n```sql\nSELECT * FROM t\nWHERE (col1 = 5 OR col2 <> 10) AND NOT (col3 IS NULL);\n```\nWhich rows are excluded?",
        options: {
          a: "Rows with col3 NULL only",
          b: "Rows where col1=5",
          c: "Rows where col1!=5 AND col2=10",
          d: "Rows with col3 NULL or (col1!=5 AND col2=10)",
        },
        correct: "d",
      },
      {
        id: 21,
        question:
          "Subquery semantics:\n\n```sql\nSELECT name\nFROM emp e\nWHERE salary > (SELECT AVG(salary) FROM emp WHERE dept = e.dept);\n```\nThis returns employees who:",
        options: {
          a: "Earn above the company's average salary",
          b: "Earn above their department's average",
          c: "Earn below their department's average",
          d: "Have the maximum salary overall",
        },
        correct: "b",
      },
      {
        id: 22,
        question:
          "Window function vs GROUP BY:\n\n```sql\nSELECT e.*, AVG(salary) OVER (PARTITION BY dept) AS avg_dept\nFROM emp e;\n```\nCompared to a GROUP BY query, this:",
        options: {
          a: "Reduces row count per dept",
          b: "Keeps each employee row and adds dept average per row",
          c: "Is invalid without ORDER BY in window",
          d: "Duplicates rows",
        },
        correct: "b",
      },
      {
        id: 23,
        question:
          "Join type identification:\n\n```sql\nSELECT * FROM A a RIGHT JOIN B b ON a.k=b.k;\n```\nWhich is equivalent?",
        options: {
          a: "B LEFT JOIN A ON a.k=b.k",
          b: "A FULL JOIN B ON a.k=b.k",
          c: "A INNER JOIN B ON a.k=b.k",
          d: "A CROSS JOIN B",
        },
        correct: "a",
      },
      // SQL theory
      {
        id: 24,
        question:
          "Transactions: Which statement ends the current transaction and makes changes permanent?",
        options: {
          a: "SAVEPOINT",
          b: "ROLLBACK",
          c: "COMMIT",
          d: "SET AUTOCOMMIT OFF",
        },
        correct: "c",
      },
      {
        id: 25,
        question: "DDL vs DML: Which is DDL?",
        options: {
          a: "INSERT",
          b: "UPDATE",
          c: "CREATE TABLE",
          d: "DELETE",
        },
        correct: "c",
      },
      {
        id: 26,
        question: "Indexing: Which statement is most accurate?",
        options: {
          a: "Indexes always speed up writes",
          b: "B-Tree indexes help range queries on ordered columns",
          c: "Hash indexes support ORDER BY efficiently",
          d: "Composite index order is irrelevant",
        },
        correct: "b",
      },
      {
        id: 27,
        question:
          "Optimization: Which often improves performance for selective predicates?",
        options: {
          a: "Wrapping indexed columns in functions",
          b: "Using `SELECT *`",
          c: "Creating appropriate covering indexes",
          d: "Adding unnecessary DISTINCT",
        },
        correct: "c",
      },
      {
        id: 28,
        question: "WHERE vs HAVING: Choose the correct statement.",
        options: {
          a: "HAVING filters before GROUP BY",
          b: "WHERE can use aggregates",
          c: "HAVING filters aggregated groups; WHERE filters rows",
          d: "They are interchangeable",
        },
        correct: "c",
      },
      {
        id: 29,
        question:
          "Isolation & anomalies: Which isolation level prevents dirty reads but allows non-repeatable reads?",
        options: {
          a: "READ UNCOMMITTED",
          b: "READ COMMITTED",
          c: "REPEATABLE READ",
          d: "SERIALIZABLE",
        },
        correct: "b",
      },

      // ==== HTML/CSS (5) ====
      {
        id: 30,
        question:
          'CSS specificity outcome:\n\n```html\n<div id="box" class="c1 c2"></div>\n<style>\n  .c1 { border: 1px solid; }\n  #box { border: 3px dashed; }\n  div.c1.c2 { border: 2px dotted; }\n</style>\n```\nWhat border is rendered?',
        options: {
          a: "1px solid",
          b: "2px dotted",
          c: "3px dashed",
          d: "No border",
        },
        correct: "c",
      },
      {
        id: 31,
        question:
          "Responsive media query effect:\n\n```css\n.container{ width: 800px; }\n@media (max-width: 600px){ .container{ width: 100%; } }\n```\nOn a 480px wide device, width of `.container` is:",
        options: {
          a: "800px",
          b: "600px",
          c: "100%",
          d: "480rem",
        },
        correct: "c",
      },
      {
        id: 32,
        question:
          'Rendered HTML semantics:\n\n```html\n<header>\n  <nav><a href="#main">Skip</a></nav>\n</header>\n<main id="main"><article><h1>T</h1></article></main>\n```\nWhich is true?',
        options: {
          a: "<main> may not contain <article>",
          b: "Using <nav> inside <header> is invalid",
          c: "Skip link improves accessibility",
          d: "id on <main> is invalid",
        },
        correct: "c",
      },
      {
        id: 33,
        question:
          'CSS cascade order:\n\n```html\n<style>.btn{padding:8px} .btn{padding:12px!important}</style>\n<button class="btn">OK</button>\n```\nFinal padding?',
        options: {
          a: "8px",
          b: "12px",
          c: "0px",
          d: "Undefined",
        },
        correct: "b",
      },
      {
        id: 34,
        question: "Selector precedence: Which selector is most specific?",
        options: {
          a: "button.primary",
          b: "#submit",
          c: "button[disabled]",
          d: "button",
        },
        correct: "b",
      },

      // ==== OOP (8) ====
      {
        id: 35,
        question:
          'C++ OOP – ctor/dtor order:\n\n```cpp\n#include <iostream>\nstruct B{ B(){std::cout<<"B";} ~B(){std::cout<<"b";} };\nstruct D: B{ D(){std::cout<<"D";} ~D(){std::cout<<"d";} };\nint main(){ D x; }\n```\nWhat prints?',
        options: {
          a: "BDdb",
          b: "BDbd",
          c: "DBdb",
          d: "BDdbd",
        },
        correct: "b",
      },
      {
        id: 36,
        question:
          'Virtual dispatch:\n\n```cpp\n#include <iostream>\nstruct B{ virtual void f(){std::cout<<"B";} };\nstruct D: B{ void f() override {std::cout<<"D";} };\nint main(){ B* p = new D; p->f(); }\n```\nOutput?',
        options: {
          a: "B",
          b: "D",
          c: "BD",
          d: "UB",
        },
        correct: "b",
      },
      {
        id: 37,
        question:
          "Overriding vs overloading:\n\n```cpp\nstruct B{ virtual int f(int); };\nstruct D: B{ int f(double); };\n```\nWhich is true?",
        options: {
          a: "D overrides B::f",
          b: "D hides B::f; call via D requires using B::f to expose",
          c: "Pure virtual required to override",
          d: "Ill-formed due to covariance",
        },
        correct: "b",
      },
      {
        id: 38,
        question:
          "Multiple inheritance & ambiguity:\n\n```cpp\nstruct A{ void f(); };\nstruct B{ void f(); };\nstruct C: A, B{};\nC c; c.f();\n```\nWhich is correct?",
        options: {
          a: "Calls A::f by default",
          b: "Calls B::f by default",
          c: "Ambiguous; must qualify A::f or B::f",
          d: "Illegal in C++",
        },
        correct: "c",
      },
      {
        id: 39,
        question: "Theory: Encapsulation primarily ensures that:",
        options: {
          a: "Objects can inherit from multiple bases",
          b: "Internal state is hidden behind well-defined interfaces",
          c: "Functions are always virtual",
          d: "Data is stored contiguously in memory",
        },
        correct: "b",
      },
      {
        id: 40,
        question: "Theory: Polymorphism in C++ is achieved by:",
        options: {
          a: "Function templates only",
          b: "Overloading only",
          c: "Virtual functions (runtime) and templates (compile-time)",
          d: "Macros",
        },
        correct: "c",
      },
      {
        id: 41,
        question: "Theory: Abstraction focuses on:",
        options: {
          a: "Hiding implementation details while exposing essential behavior",
          b: "Copying objects via bitwise copy",
          c: "Optimizing CPU caches",
          d: "Enforcing single inheritance",
        },
        correct: "a",
      },
      {
        id: 42,
        question: "Theory: Correct relationship example pairing:",
        options: {
          a: "Composition — `Engine` uses `Car`",
          b: "Aggregation — `Car` owns `Wheel` with exclusive lifetime",
          c: "Association — `Teacher` references `Student` without ownership",
          d: "Inheritance — `Wheel` is-a `Vehicle`",
        },
        correct: "c",
      },

      // ==== Algorithms (8) – Searching, Sorting, Graphs ====
      {
        id: 43,
        question:
          'Identify algorithm: "Divide list around a pivot, recursively sort partitions."',
        options: {
          a: "Mergesort",
          b: "Quicksort",
          c: "Heapsort",
          d: "Insertion sort",
        },
        correct: "b",
      },
      {
        id: 44,
        question:
          "Stability & adaptiveness: Which sorting algorithm is stable and O(n) when input is nearly sorted?",
        options: {
          a: "Insertion sort",
          b: "Quicksort",
          c: "Heapsort",
          d: "Selection sort",
        },
        correct: "a",
      },
      {
        id: 45,
        question:
          "Complexity classification: Dijkstra's algorithm with a binary heap on a sparse graph (V vertices, E edges) runs in:",
        options: {
          a: "O(V^2)",
          b: "O(E log V)",
          c: "O(E + V)",
          d: "O(V log V + E^2)",
        },
        correct: "b",
      },
      {
        id: 46,
        question: "Use cases: Which pairing is most appropriate?",
        options: {
          a: "DFS — shortest path in weighted graph",
          b: "BFS — shortest path in unweighted graph",
          c: "Prim — single-source shortest path",
          d: "Dijkstra — detect cycles",
        },
        correct: "b",
      },
      {
        id: 47,
        question:
          "Trace quicksort partition (Lomuto) on [3,1,4,1] with pivot=last element.\nAfter first partition, array becomes:",
        options: {
          a: "[1,1,3,4]",
          b: "[1,3,4,1]",
          c: "[1,1,4,3]",
          d: "[1,3,1,4]",
        },
        correct: "d",
      },
      {
        id: 48,
        question:
          "DFS traversal order (one valid order) for graph:\n\n```text\nAdj:\nA: B, C\nB: D\nC: D\nD: (none)\nStart: A\n```\nWhich is a valid DFS visit sequence?",
        options: {
          a: "A, B, D, C",
          b: "A, C, D, B, D",
          c: "A, D, B, C",
          d: "B, A, C, D",
        },
        correct: "a",
      },
      {
        id: 49,
        question:
          "Dijkstra step: From source S, current distances are\nS:0, A:2, B:5, C:∞. Next extracted is A; relaxing edges A→B (3), A→C (4). New distances?",
        options: {
          a: "B:3, C:4",
          b: "B:2, C:4",
          c: "B:5, C:6",
          d: "B:5, C:4",
        },
        correct: "d",
      },
      {
        id: 50,
        question: "Prim's MST property: Which statement is correct?",
        options: {
          a: "Prim's chooses the globally lightest edge each step",
          b: "Prim's grows a tree by always picking the minimum-weight edge crossing the cut from the grown set",
          c: "Prim's requires a max-heap to be correct",
          d: "Prim's works only on directed graphs",
        },
        correct: "b",
      },
    ],
  },

  exam5: {
    title:
      "Technical Mock Exam - Algorithms (Sorting & Searching) - Intermediate to Advanced",
    questions: [
      {
        id: 1,
        question: "What is the average time complexity of Quick Sort?",
        options: { a: "O(n log n)", b: "O(n^2)", c: "O(log n)", d: "O(n)" },
        correct: "a",
      },
      {
        id: 2,
        question:
          "In the worst case, what is the time complexity of Quick Sort?",
        options: { a: "O(n log n)", b: "O(n^2)", c: "O(n)", d: "O(log n)" },
        correct: "b",
      },
      {
        id: 3,
        question: "Which sorting algorithm is stable by default?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Selection Sort",
          d: "Heap Sort",
        },
        correct: "b",
      },
      {
        id: 4,
        question: "Which algorithm uses a 'divide and conquer' approach?",
        options: {
          a: "Merge Sort",
          b: "Bubble Sort",
          c: "Insertion Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 5,
        question:
          "Which sorting algorithm works by repeatedly swapping adjacent elements if they are in the wrong order?",
        options: {
          a: "Selection Sort",
          b: "Bubble Sort",
          c: "Merge Sort",
          d: "Quick Sort",
        },
        correct: "b",
      },
      {
        id: 6,
        question: "What is the best-case time complexity of Insertion Sort?",
        options: { a: "O(n)", b: "O(n log n)", c: "O(n^2)", d: "O(log n)" },
        correct: "a",
      },
      {
        id: 7,
        question:
          "Which sorting algorithm has the same complexity for best, average, and worst cases?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Bubble Sort",
          d: "Selection Sort",
        },
        correct: "d",
      },
      {
        id: 8,
        question: "Binary Search requires:",
        options: {
          a: "Sorted data",
          b: "Unsorted data",
          c: "Hashing",
          d: "Tree structure",
        },
        correct: "a",
      },
      {
        id: 9,
        question: "What is the worst-case time complexity of Merge Sort?",
        options: { a: "O(n log n)", b: "O(n^2)", c: "O(n)", d: "O(log n)" },
        correct: "a",
      },
      {
        id: 10,
        question: "In Quick Sort, the choice of pivot affects:",
        options: {
          a: "Space complexity",
          b: "Time complexity",
          c: "Algorithm stability",
          d: "Both space and stability",
        },
        correct: "b",
      },
      {
        id: 11,
        question:
          "Which search algorithm is faster on average for a large sorted dataset?",
        options: {
          a: "Linear Search",
          b: "Binary Search",
          c: "Jump Search",
          d: "Exponential Search",
        },
        correct: "b",
      },
      {
        id: 12,
        question: "Which sorting algorithm is in-place but not stable?",
        options: {
          a: "Selection Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Bubble Sort",
        },
        correct: "a",
      },
      {
        id: 13,
        question:
          "Which algorithm repeatedly finds the minimum element from the unsorted part and puts it at the beginning?",
        options: {
          a: "Selection Sort",
          b: "Insertion Sort",
          c: "Quick Sort",
          d: "Bubble Sort",
        },
        correct: "a",
      },
      {
        id: 14,
        question: "What is the average time complexity of Binary Search?",
        options: { a: "O(n)", b: "O(log n)", c: "O(n log n)", d: "O(1)" },
        correct: "b",
      },
      {
        id: 15,
        question: "Merge Sort's extra space complexity is:",
        options: { a: "O(1)", b: "O(log n)", c: "O(n)", d: "O(n^2)" },
        correct: "c",
      },
      {
        id: 16,
        question:
          "Which sorting algorithm can be efficiently implemented recursively?",
        options: {
          a: "Merge Sort",
          b: "Bubble Sort",
          c: "Selection Sort",
          d: "Insertion Sort",
        },
        correct: "a",
      },
      {
        id: 17,
        question:
          "Which sorting algorithm's performance degrades significantly if the data is already sorted and a bad pivot is chosen?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Bubble Sort",
          d: "Insertion Sort",
        },
        correct: "a",
      },
      {
        id: 18,
        question: "Which sorting algorithm is best for nearly sorted data?",
        options: {
          a: "Quick Sort",
          b: "Insertion Sort",
          c: "Merge Sort",
          d: "Selection Sort",
        },
        correct: "b",
      },
      {
        id: 19,
        question: "Linear Search best-case complexity occurs when:",
        options: {
          a: "Element is at the start",
          b: "Element is at the end",
          c: "Element is not found",
          d: "Data is sorted",
        },
        correct: "a",
      },
      {
        id: 20,
        question: "Quick Sort is generally faster than Merge Sort because:",
        options: {
          a: "It uses less space",
          b: "It is stable",
          c: "It avoids recursion",
          d: "It sorts in multiple passes",
        },
        correct: "a",
      },
      {
        id: 21,
        question:
          "Which sorting algorithm is the simplest to implement but inefficient for large datasets?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Bubble Sort",
          d: "Heap Sort",
        },
        correct: "c",
      },
      {
        id: 22,
        question:
          "Which algorithm compares each element with all other elements to find its correct position?",
        options: {
          a: "Selection Sort",
          b: "Insertion Sort",
          c: "Bubble Sort",
          d: "Quick Sort",
        },
        correct: "a",
      },
      {
        id: 23,
        question: "What is the worst-case time complexity of Binary Search?",
        options: { a: "O(log n)", b: "O(n)", c: "O(n log n)", d: "O(1)" },
        correct: "a",
      },
      {
        id: 24,
        question: "Which sorting algorithm is NOT based on comparisons?",
        options: {
          a: "Counting Sort",
          b: "Merge Sort",
          c: "Quick Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 25,
        question: "Which algorithm requires O(n^2) swaps in the worst case?",
        options: {
          a: "Bubble Sort",
          b: "Insertion Sort",
          c: "Selection Sort",
          d: "Quick Sort",
        },
        correct: "a",
      },
      {
        id: 26,
        question:
          "Which sorting algorithm divides the array into sorted and unsorted regions?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Heap Sort",
        },
        correct: "c",
      },
      {
        id: 27,
        question: "Which algorithm has the best average time complexity?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 28,
        question: "In Binary Search, the search space is reduced by:",
        options: {
          a: "One element",
          b: "Half",
          c: "Two-thirds",
          d: "One-quarter",
        },
        correct: "b",
      },
      {
        id: 29,
        question: "Which sorting algorithm's best case is O(n log n)?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Heap Sort",
          d: "All of the above",
        },
        correct: "d",
      },
      {
        id: 30,
        question:
          "Which algorithm has the smallest constant factors for large datasets?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Selection Sort",
          d: "Insertion Sort",
        },
        correct: "a",
      },
      {
        id: 31,
        question: "Which algorithm uses repeated merging of sorted sublists?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Bubble Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 32,
        question: "What is the worst-case time complexity of Linear Search?",
        options: { a: "O(n)", b: "O(log n)", c: "O(n log n)", d: "O(1)" },
        correct: "a",
      },
      {
        id: 33,
        question:
          "Which sorting algorithm is often taught first due to its simplicity?",
        options: {
          a: "Quick Sort",
          b: "Bubble Sort",
          c: "Merge Sort",
          d: "Heap Sort",
        },
        correct: "b",
      },
      {
        id: 34,
        question: "Which algorithm uses a pivot to partition the array?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Heap Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 35,
        question:
          "In Merge Sort, merging two sorted lists of sizes m and n takes:",
        options: { a: "O(m + n)", b: "O(mn)", c: "O(log(m+n))", d: "O(1)" },
        correct: "a",
      },
      {
        id: 36,
        question: "Which algorithm performs best for small datasets?",
        options: {
          a: "Insertion Sort",
          b: "Quick Sort",
          c: "Merge Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 37,
        question: "Binary Search cannot be applied on:",
        options: {
          a: "Linked List without random access",
          b: "Sorted Array",
          c: "Balanced BST",
          d: "Sorted Linked List with index access",
        },
        correct: "a",
      },
      {
        id: 38,
        question: "Which sorting algorithm is adaptive by nature?",
        options: {
          a: "Insertion Sort",
          b: "Selection Sort",
          c: "Merge Sort",
          d: "Quick Sort",
        },
        correct: "a",
      },
      {
        id: 39,
        question:
          "Which algorithm is best suited when memory space is limited?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Counting Sort",
          d: "Radix Sort",
        },
        correct: "a",
      },
      {
        id: 40,
        question:
          "In Bubble Sort, the number of comparisons in the worst case for n elements is:",
        options: { a: "O(n^2)", b: "O(n log n)", c: "O(n)", d: "O(log n)" },
        correct: "a",
      },
      {
        id: 41,
        question:
          "Which sorting algorithm has the lowest number of swaps in the worst case?",
        options: {
          a: "Selection Sort",
          b: "Insertion Sort",
          c: "Bubble Sort",
          d: "Quick Sort",
        },
        correct: "a",
      },
      {
        id: 42,
        question: "Which search algorithm works in O(1) in the best case?",
        options: {
          a: "Linear Search",
          b: "Binary Search",
          c: "Both",
          d: "None",
        },
        correct: "c",
      },
      {
        id: 43,
        question: "Which algorithm is easiest to parallelize?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Bubble Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 44,
        question:
          "Which sorting algorithm is guaranteed O(n log n) in all cases?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Insertion Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 45,
        question: "What is the space complexity of Binary Search?",
        options: { a: "O(1)", b: "O(log n)", c: "O(n)", d: "O(n^2)" },
        correct: "a",
      },
      {
        id: 46,
        question:
          "Which algorithm is often the fastest in practice for most inputs?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Selection Sort",
          d: "Bubble Sort",
        },
        correct: "a",
      },
      {
        id: 47,
        question:
          "Which sorting algorithm can be implemented without recursion and still maintain efficiency?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Heap Sort",
          d: "Bubble Sort",
        },
        correct: "c",
      },
      {
        id: 48,
        question: "In Quick Sort, the ideal pivot is:",
        options: {
          a: "Smallest element",
          b: "Largest element",
          c: "Median",
          d: "Random element",
        },
        correct: "c",
      },
      {
        id: 49,
        question:
          "Which algorithm scans from left to right, inserting each element into its correct position in a sorted portion?",
        options: {
          a: "Insertion Sort",
          b: "Selection Sort",
          c: "Bubble Sort",
          d: "Merge Sort",
        },
        correct: "a",
      },
      {
        id: 50,
        question: "Linear Search is preferable over Binary Search when:",
        options: {
          a: "Data is small",
          b: "Data is sorted",
          c: "Data is large",
          d: "Search is frequent",
        },
        correct: "a",
      },
    ],
  },
};

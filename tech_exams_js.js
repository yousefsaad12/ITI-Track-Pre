const technicalExams = {
  exam1: {
    title: "Technical Mock Exam 1  - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
    cat : "Technical Mock Exam",
     
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
        correct: "c",
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
        correct: "d",
      },
      {
        id: 14,
        question:
          "Pseudocode:\n```\nx ← 5\ny ← 0\nwhile x > 0\ny ← y + x\nx ← x - 2\nprint y\n```\nOutput?",
        options: { a: "5", b: "9", c: "12", d: "15" },
        correct: "b",
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
        correct: "c",
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
        correct: "a",
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
      "Technical Mock Exam 2 - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
      cat : "Technical Mock Exam",
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
      "Technical Mock Exam 3 - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
      cat : "Technical Mock Exam",
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
      "Technical Mock Exam 4 - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
      cat : "Technical Mock Exam",
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
      "Algorithms 1 (Sorting & Searching) - Intermediate to Advanced",
      cat : "Algorithms",
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
          d: "Both a & b",
        },
        correct: "d",
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


  exam6: {
  title: "Algorithms 2 MCQ Exam - Sorting, Searching, and Graph Algorithms",
  cat:"Algorithms",
  questions: [
    { id: 1, question: "What is the average time complexity of Quick Sort?", options: { a: "O(n log n)", b: "O(n²)", c: "O(log n)", d: "O(n)" }, answer: "a" },
    { id: 2, question: "Which sorting algorithm is stable by default?", options: { a: "Quick Sort", b: "Merge Sort", c: "Selection Sort", d: "Heap Sort" }, answer: "b" },
    { id: 3, question: "What is the worst-case time complexity of Merge Sort?", options: { a: "O(n²)", b: "O(n log n)", c: "O(n)", d: "O(log n)" }, answer: "b" },
    { id: 4, question: "Which algorithm repeatedly selects the smallest element and moves it to the front?", options: { a: "Bubble Sort", b: "Selection Sort", c: "Insertion Sort", d: "Quick Sort" }, answer: "b" },
    { id: 5, question: "In Bubble Sort, how many passes are needed in the worst case for n elements?", options: { a: "n", b: "n-1", c: "n log n", d: "n²" }, answer: "b" },
    { id: 6, question: "Which sorting algorithm works best for nearly sorted data?", options: { a: "Quick Sort", b: "Insertion Sort", c: "Merge Sort", d: "Selection Sort" }, answer: "b" },
    { id: 7, question: "What is the space complexity of Merge Sort?", options: { a: "O(1)", b: "O(log n)", c: "O(n)", d: "O(n²)" }, answer: "c" },
    { id: 8, question: "Which search algorithm requires the data to be sorted?", options: { a: "Linear Search", b: "Binary Search", c: "DFS", d: "BFS" }, answer: "b" },
    { id: 9, question: "What is the time complexity of Binary Search in the worst case?", options: { a: "O(1)", b: "O(n)", c: "O(log n)", d: "O(n log n)" }, answer: "c" },
    { id: 10, question: "Which search algorithm checks each element until it finds the target?", options: { a: "Linear Search", b: "Binary Search", c: "Jump Search", d: "Interpolation Search" }, answer: "a" },
    { id: 11, question: "DFS uses which data structure internally?", options: { a: "Queue", b: "Stack", c: "Heap", d: "Priority Queue" }, answer: "b" },
    { id: 12, question: "BFS uses which data structure internally?", options: { a: "Queue", b: "Stack", c: "Heap", d: "Deque" }, answer: "a" },
    { id: 13, question: "Which algorithm is best for finding the shortest path in a weighted graph with non-negative weights?", options: { a: "Prim's", b: "Dijkstra's", c: "Kruskal's", d: "DFS" }, answer: "b" },
    { id: 14, question: "Which algorithm finds a Minimum Spanning Tree?", options: { a: "Prim's", b: "Dijkstra's", c: "BFS", d: "DFS" }, answer: "a" },
    { id: 15, question: "What is the worst-case time complexity of Quick Sort?", options: { a: "O(n log n)", b: "O(n²)", c: "O(n)", d: "O(log n)" }, answer: "b" },
    { id: 16, question: "Which algorithm divides the array into halves recursively?", options: { a: "Merge Sort", b: "Selection Sort", c: "Insertion Sort", d: "Bubble Sort" }, answer: "a" },
    { id: 17, question: "Which sorting algorithm works in-place and is not stable?", options: { a: "Merge Sort", b: "Quick Sort", c: "Insertion Sort", d: "Bubble Sort" }, answer: "b" },
    { id: 18, question: "Which algorithm’s performance degrades significantly with already sorted input?", options: { a: "Merge Sort", b: "Insertion Sort", c: "Quick Sort (naive pivot)", d: "Binary Search" }, answer: "c" },
    { id: 19, question: "The BFS traversal of a graph is equivalent to:", options: { a: "Level-order traversal of a tree", b: "In-order traversal", c: "Post-order traversal", d: "Pre-order traversal" }, answer: "a" },
    { id: 20, question: "Which algorithm is greedy in nature and builds MST by adding the cheapest edge at each step?", options: { a: "Dijkstra's", b: "Prim's", c: "DFS", d: "Kruskal's" }, answer: "b" },
    { id: 21, question: "Which algorithm uses the 'divide and conquer' strategy?", options: { a: "Merge Sort", b: "Quick Sort", c: "Both A and B", d: "Selection Sort" }, answer: "c" },
    { id: 22, question: "Which sorting method is the slowest on large datasets?", options: { a: "Bubble Sort", b: "Quick Sort", c: "Merge Sort", d: "Heap Sort" }, answer: "a" },
    { id: 23, question: "What is the average time complexity of Linear Search?", options: { a: "O(1)", b: "O(n)", c: "O(log n)", d: "O(n log n)" }, answer: "b" },
    { id: 24, question: "Which algorithm is best suited for dense graphs for shortest paths?", options: { a: "BFS", b: "Dijkstra's with adjacency matrix", c: "DFS", d: "Prim's" }, answer: "b" },
    { id: 25, question: "Which traversal is used to check graph connectivity?", options: { a: "DFS", b: "BFS", c: "Both A and B", d: "Neither" }, answer: "c" },
    { id: 26, question: "Which sorting algorithm swaps adjacent elements if they are out of order?", options: { a: "Selection Sort", b: "Bubble Sort", c: "Insertion Sort", d: "Quick Sort" }, answer: "b" },
    { id: 27, question: "What is the best-case time complexity of Insertion Sort?", options: { a: "O(n²)", b: "O(n log n)", c: "O(n)", d: "O(1)" }, answer: "c" },
    { id: 28, question: "Which algorithm is optimal for small datasets?", options: { a: "Bubble Sort", b: "Insertion Sort", c: "Merge Sort", d: "Quick Sort" }, answer: "b" },
    { id: 29, question: "Prim's Algorithm uses which data structure for efficiency?", options: { a: "Stack", b: "Priority Queue", c: "Queue", d: "Linked List" }, answer: "b" },
    { id: 30, question: "Dijkstra’s Algorithm fails with graphs containing:", options: { a: "Negative weight edges", b: "Positive weight edges", c: "Zero weight edges", d: "Cycles" }, answer: "a" },
    { id: 31, question: "Which search algorithm can be implemented recursively or iteratively?", options: { a: "DFS", b: "BFS", c: "Both A and B", d: "Neither" }, answer: "c" },
    { id: 32, question: "Merge Sort’s recursion depth is:", options: { a: "O(1)", b: "O(log n)", c: "O(n)", d: "O(n log n)" }, answer: "b" },
    { id: 33, question: "Quick Sort’s average recursion depth is:", options: { a: "O(n)", b: "O(log n)", c: "O(1)", d: "O(n log n)" }, answer: "b" },
    { id: 34, question: "Which algorithm is NOT comparison-based?", options: { a: "Merge Sort", b: "Counting Sort", c: "Quick Sort", d: "Bubble Sort" }, answer: "b" },
    { id: 35, question: "In BFS, the maximum size of the queue can be:", options: { a: "O(1)", b: "O(V)", c: "O(E)", d: "O(V+E)" }, answer: "b" },
    { id: 36, question: "In DFS, the maximum size of the stack can be:", options: { a: "O(1)", b: "O(V)", c: "O(E)", d: "O(log V)" }, answer: "b" },
    { id: 37, question: "Which sorting algorithm has the same complexity for best, average, and worst cases?", options: { a: "Merge Sort", b: "Quick Sort", c: "Insertion Sort", d: "Selection Sort" }, answer: "d" },
    { id: 38, question: "Which search algorithm works well with linked lists?", options: { a: "Binary Search", b: "Linear Search", c: "DFS", d: "BFS" }, answer: "b" },
    { id: 39, question: "Which algorithm stops as soon as the target is found?", options: { a: "DFS", b: "BFS", c: "Both A and B", d: "Neither" }, answer: "c" },
    { id: 40, question: "Which algorithm partitions data into two sets based on a pivot?", options: { a: "Merge Sort", b: "Quick Sort", c: "Selection Sort", d: "Insertion Sort" }, answer: "b" },
    { id: 41, question: "Which sorting algorithm can be adaptive?", options: { a: "Insertion Sort", b: "Bubble Sort", c: "Both A and B", d: "Selection Sort" }, answer: "c" },
    { id: 42, question: "Which algorithm is typically implemented using recursion for simplicity?", options: { a: "DFS", b: "BFS", c: "Selection Sort", d: "Bubble Sort" }, answer: "a" },
    { id: 43, question: "Which is the main advantage of BFS over DFS in pathfinding?", options: { a: "Uses less memory", b: "Finds the shortest path", c: "Faster always", d: "Avoids cycles" }, answer: "b" },
    { id: 44, question: "Which algorithm can be unstable if implemented poorly?", options: { a: "Merge Sort", b: "Quick Sort", c: "Counting Sort", d: "Bubble Sort" }, answer: "b" },
    { id: 45, question: "Which sorting algorithm is NOT in-place?", options: { a: "Merge Sort", b: "Quick Sort", c: "Insertion Sort", d: "Selection Sort" }, answer: "a" },
    { id: 46, question: "What is the worst-case space complexity of DFS using recursion?", options: { a: "O(V)", b: "O(E)", c: "O(1)", d: "O(log V)" }, answer: "a" },
    { id: 47, question: "Which sorting algorithm is most likely to be used in library sort functions?", options: { a: "Merge Sort", b: "Quick Sort", c: "Hybrid like Timsort", d: "Bubble Sort" }, answer: "c" },
    { id: 48, question: "Which algorithm is based on selecting a pivot and partitioning?", options: { a: "Merge Sort", b: "Quick Sort", c: "Selection Sort", d: "Heap Sort" }, answer: "b" },
    { id: 49, question: "Which algorithm is guaranteed to work on disconnected graphs?", options: { a: "Single BFS/DFS", b: "Multiple BFS/DFS from each component", c: "Dijkstra's", d: "Prim's" }, answer: "b" },
    { id: 50, question: "Which algorithm is the simplest to implement but least efficient for large datasets?", options: { a: "Merge Sort", b: "Quick Sort", c: "Bubble Sort", d: "Heap Sort" }, answer: "c" }
  ]
},


  exam7: {
    title:
      "Technical Mock Exam - Algorithms (Intermediate to Advanced & Tricky)",
      cat:"Algorithms",
    questions: [
      {
        id: 1,
        question:
          "Which sorting algorithm uses the 'divide-and-conquer' paradigm and achieves O(n log n) time complexity in all cases?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Selection Sort",
          d: "Insertion Sort",
        },
        correct: "b",
      },
      {
        id: 2,
        question:
          "In Quick Sort, which case results in the worst time complexity of O(n²)?",
        options: {
          a: "Array is already sorted and pivot is always chosen as the first element",
          b: "Array is random and pivot is median",
          c: "Array contains all unique elements",
          d: "Pivot is chosen randomly",
        },
        correct: "a",
      },
      {
        id: 3,
        question: "Which algorithm guarantees stability in sorting?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Selection Sort",
          d: "Heap Sort",
        },
        correct: "a",
      },
      {
        id: 4,
        question:
          "Which search algorithm can work efficiently only on sorted datasets?",
        options: {
          a: "DFS",
          b: "Binary Search",
          c: "Linear Search",
          d: "BFS",
        },
        correct: "b",
      },
      {
        id: 5,
        question:
          "You have a large dataset that doesn't fit entirely into memory. Which sorting algorithm is most suitable?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Bubble Sort",
        },
        correct: "b",
      },
      {
        id: 6,
        question:
          "In BFS, the typical data structure used to track the next node to visit is:",
        options: {
          a: "Stack",
          b: "Queue",
          c: "Priority Queue",
          d: "Hash Table",
        },
        correct: "b",
      },
      {
        id: 7,
        question:
          "Which sorting algorithm makes the fewest swaps in its worst case?",
        options: {
          a: "Selection Sort",
          b: "Quick Sort",
          c: "Bubble Sort",
          d: "Insertion Sort",
        },
        correct: "a",
      },
      {
        id: 8,
        question:
          "In Dijkstra's Algorithm, what is the primary data structure used for selecting the next node with the minimum distance?",
        options: {
          a: "Stack",
          b: "Queue",
          c: "Priority Queue (Min Heap)",
          d: "Hash Map",
        },
        correct: "c",
      },
      {
        id: 9,
        question:
          "Which algorithm is most likely represented by this pseudocode: 'for i from 0 to n-1, find the minimum element in the remaining array and swap it with the current index'?",
        options: {
          a: "Selection Sort",
          b: "Insertion Sort",
          c: "Bubble Sort",
          d: "Merge Sort",
        },
        correct: "a",
      },
      {
        id: 10,
        question:
          "Which graph traversal guarantees finding the shortest path in an unweighted graph?",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Prim's",
          d: "Dijkstra's",
        },
        correct: "b",
      },
      {
        id: 11,
        question:
          "If you want to sort nearly sorted data with minimal complexity, which algorithm is preferable?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Insertion Sort",
          d: "Selection Sort",
        },
        correct: "c",
      },
      {
        id: 12,
        question: "Prim's Algorithm is primarily used for:",
        options: {
          a: "Finding shortest paths",
          b: "Finding minimum spanning tree",
          c: "Sorting vertices",
          d: "Detecting cycles",
        },
        correct: "b",
      },
      {
        id: 13,
        question:
          "Which search algorithm examines every element in the list until the target is found or the list ends?",
        options: {
          a: "Binary Search",
          b: "Linear Search",
          c: "DFS",
          d: "BFS",
        },
        correct: "b",
      },
      {
        id: 14,
        question: "What is the worst-case time complexity of Merge Sort?",
        options: {
          a: "O(n²)",
          b: "O(n log n)",
          c: "O(log n)",
          d: "O(n)",
        },
        correct: "b",
      },
      {
        id: 15,
        question:
          "Which algorithm is inherently recursive and can also be implemented iteratively with a stack?",
        options: {
          a: "BFS",
          b: "DFS",
          c: "Binary Search",
          d: "Prim's Algorithm",
        },
        correct: "b",
      },
      {
        id: 16,
        question:
          "Which sorting algorithm is adaptive, meaning it performs better when the input is partially sorted?",
        options: {
          a: "Insertion Sort",
          b: "Quick Sort",
          c: "Merge Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 17,
        question:
          "You need to find the shortest path in a weighted graph with no negative weights. Which algorithm is best?",
        options: {
          a: "Prim's Algorithm",
          b: "Dijkstra's Algorithm",
          c: "BFS",
          d: "DFS",
        },
        correct: "b",
      },
      {
        id: 18,
        question: "In Bubble Sort, after the k-th pass, what is guaranteed?",
        options: {
          a: "First k elements are sorted",
          b: "Last k elements are sorted",
          c: "All elements are sorted",
          d: "Middle elements are sorted",
        },
        correct: "b",
      },
      {
        id: 19,
        question:
          "Which algorithm works by repeatedly selecting the smallest remaining edge that doesn't form a cycle?",
        options: {
          a: "Dijkstra's Algorithm",
          b: "Prim's Algorithm",
          c: "Kruskal's Algorithm",
          d: "DFS",
        },
        correct: "c",
      },
      {
        id: 20,
        question: "What is the space complexity of Merge Sort?",
        options: {
          a: "O(1)",
          b: "O(log n)",
          c: "O(n)",
          d: "O(n log n)",
        },
        correct: "c",
      },
      {
        id: 21,
        question: "Which of these algorithms is NOT comparison-based?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Counting Sort",
          d: "Selection Sort",
        },
        correct: "c",
      },
      {
        id: 22,
        question:
          "A recursive algorithm that splits the array into smaller parts until size 1, then merges them back, is:",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Heap Sort",
        },
        correct: "b",
      },
      {
        id: 23,
        question:
          "Which graph traversal can get stuck in deep paths without reaching closer nodes first?",
        options: {
          a: "BFS",
          b: "DFS",
          c: "Prim's",
          d: "Dijkstra's",
        },
        correct: "b",
      },
      {
        id: 24,
        question: "What is the average time complexity of Binary Search?",
        options: {
          a: "O(n)",
          b: "O(log n)",
          c: "O(n log n)",
          d: "O(1)",
        },
        correct: "b",
      },
      {
        id: 25,
        question:
          "If you want to explore all vertices at distance 1 before distance 2 in a graph, you should use:",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Dijkstra's",
          d: "Prim's",
        },
        correct: "b",
      },
      {
        id: 26,
        question:
          "Which sorting algorithm is most affected by choosing a poor pivot?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 27,
        question:
          "In the worst case, how many comparisons does Linear Search make?",
        options: {
          a: "n",
          b: "log n",
          c: "n/2",
          d: "n log n",
        },
        correct: "a",
      },
      {
        id: 28,
        question:
          "In Dijkstra's algorithm, if you use a simple array instead of a priority queue, what is the complexity?",
        options: {
          a: "O(V²)",
          b: "O(E log V)",
          c: "O(V log V)",
          d: "O(E + V)",
        },
        correct: "a",
      },
      {
        id: 29,
        question:
          "Which algorithm is likely described: 'Select an arbitrary node, grow the MST by adding the smallest edge connecting the tree to a new vertex'?",
        options: {
          a: "Prim's Algorithm",
          b: "Dijkstra's Algorithm",
          c: "Kruskal's Algorithm",
          d: "DFS",
        },
        correct: "a",
      },
      {
        id: 30,
        question: "In which case does Quick Sort have O(n log n) performance?",
        options: {
          a: "When pivot is always smallest element",
          b: "When pivot is median or near median",
          c: "When array is already sorted and pivot is first element",
          d: "When pivot is always largest element",
        },
        correct: "b",
      },
      {
        id: 31,
        question:
          "Which sorting algorithm has the same worst-case and average-case complexity?",
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
        question: "Which algorithm works well when the graph is dense?",
        options: {
          a: "Prim's Algorithm with adjacency matrix",
          b: "Prim's Algorithm with adjacency list",
          c: "Dijkstra's Algorithm",
          d: "DFS",
        },
        correct: "a",
      },
      {
        id: 33,
        question:
          "Which sorting algorithm compares adjacent elements and swaps them if out of order, repeatedly until sorted?",
        options: {
          a: "Bubble Sort",
          b: "Insertion Sort",
          c: "Selection Sort",
          d: "Merge Sort",
        },
        correct: "a",
      },
      {
        id: 34,
        question:
          "In DFS, if we use recursion, what is the implicit data structure managing function calls?",
        options: {
          a: "Stack",
          b: "Queue",
          c: "Priority Queue",
          d: "Deque",
        },
        correct: "a",
      },
      {
        id: 35,
        question:
          "Which algorithm is a greedy method for finding shortest paths?",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Dijkstra's Algorithm",
          d: "Merge Sort",
        },
        correct: "c",
      },
      {
        id: 36,
        question:
          "Which sorting algorithm has the best performance on small arrays?",
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
        question:
          "If you want to find whether there is a path between two nodes in a graph quickly without considering weights, you can use:",
        options: {
          a: "BFS or DFS",
          b: "Dijkstra's Algorithm",
          c: "Prim's Algorithm",
          d: "Merge Sort",
        },
        correct: "a",
      },
      {
        id: 38,
        question:
          "Which algorithm's complexity is O(V²) without optimization and O(E log V) with a min-heap?",
        options: {
          a: "Prim's Algorithm",
          b: "DFS",
          c: "Merge Sort",
          d: "Quick Sort",
        },
        correct: "a",
      },
      {
        id: 39,
        question:
          "Which algorithm works best when the graph is sparse and edges have different weights?",
        options: {
          a: "Prim's Algorithm",
          b: "Dijkstra's Algorithm with adjacency list and heap",
          c: "BFS",
          d: "DFS",
        },
        correct: "b",
      },
      {
        id: 40,
        question: "Which sorting algorithm is NOT stable?",
        options: {
          a: "Bubble Sort",
          b: "Insertion Sort",
          c: "Selection Sort",
          d: "Merge Sort",
        },
        correct: "c",
      },
      {
        id: 41,
        question:
          "In BFS, if the graph is implemented using adjacency matrix, what is the time complexity?",
        options: {
          a: "O(V²)",
          b: "O(E + V)",
          c: "O(V + E log V)",
          d: "O(E²)",
        },
        correct: "a",
      },
      {
        id: 42,
        question:
          "Which algorithm's performance is heavily dependent on the initial order of elements?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Insertion Sort",
          d: "Counting Sort",
        },
        correct: "c",
      },
      {
        id: 43,
        question:
          "Which algorithm finds a path in a graph by exploring as far as possible before backtracking?",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Prim's Algorithm",
          d: "Dijkstra's Algorithm",
        },
        correct: "a",
      },
      {
        id: 44,
        question: "What is the space complexity of BFS?",
        options: {
          a: "O(V)",
          b: "O(E)",
          c: "O(1)",
          d: "O(V + E)",
        },
        correct: "a",
      },
      {
        id: 45,
        question:
          "In Binary Search, if the target is greater than the middle element, which part of the array is searched next?",
        options: {
          a: "Left half",
          b: "Right half",
          c: "Entire array",
          d: "Skip to last element",
        },
        correct: "b",
      },
      {
        id: 46,
        question: "Which sorting algorithm is easiest to parallelize?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Bubble Sort",
          d: "Selection Sort",
        },
        correct: "a",
      },
      {
        id: 47,
        question:
          "Which algorithm uses a greedy approach to build a minimum spanning tree starting from an arbitrary vertex?",
        options: {
          a: "Prim's Algorithm",
          b: "Kruskal's Algorithm",
          c: "Dijkstra's Algorithm",
          d: "DFS",
        },
        correct: "a",
      },
      {
        id: 48,
        question:
          "Which algorithm is typically implemented recursively but can be optimized to avoid stack overflows?",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Merge Sort",
          d: "Quick Sort",
        },
        correct: "a",
      },
      {
        id: 49,
        question:
          "Which sorting algorithm works by inserting each new element into the correct position in a growing sorted list?",
        options: {
          a: "Bubble Sort",
          b: "Selection Sort",
          c: "Insertion Sort",
          d: "Merge Sort",
        },
        correct: "c",
      },
      {
        id: 50,
        question:
          "In an unweighted graph, the shortest path between two nodes can be found by:",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Dijkstra's Algorithm",
          d: "Prim's Algorithm",
        },
        correct: "b",
      },
    ],
  },

  exam8: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
      cat:"Technical Mock Exam",
    questions: [
      // C/C++ Code-based Questions (6)
      {
        id: 1,
        question: `What is the output of the following C++ code?
\`\`\`cpp
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr + 2;
    int *q = arr + 4;
    cout << q - p << " " << *(p + 1);
    return 0;
}
\`\`\``,
        options: {
          a: "2 4",
          b: "2 3",
          c: "4 2",
          d: "Compilation error",
        },
        correct: "a",
      },
      {
        id: 2,
        question: `What will be the output of this recursive function?
\`\`\`cpp
int mystery(int n) {
    if (n <= 1) return 1;
    return n * mystery(n - 2);
}
int main() {
    cout << mystery(6);
    return 0;
}
\`\`\``,
        options: {
          a: "48",
          b: "720",
          c: "24",
          d: "6",
        },
        correct: "a",
      },
      {
        id: 3,
        question: `What is the output of the following code involving references?
\`\`\`cpp
void func(int &x, int y) {
    x += 10;
    y += 10;
}
int main() {
    int a = 5, b = 5;
    func(a, b);
    cout << a << " " << b;
    return 0;
}
\`\`\``,
        options: {
          a: "5 5",
          b: "15 5",
          c: "15 15",
          d: "5 15",
        },
        correct: "b",
      },
      {
        id: 4,
        question: `What will this loop print?
\`\`\`cpp
for (int i = 0; i < 3; ++i) {
    for (int j = i; j >= 0; --j) {
        cout << i + j << " ";
    }
    cout << endl;
}
\`\`\``,
        options: {
          a: "0\n2 1\n4 3 2",
          b: "0\n1 2\n2 3 4",
          c: "0\n2 1\n4 3 2\n",
          d: "Infinite loop",
        },
        correct: "c",
      },
      {
        id: 5,
        question: `What is the result of this expression due to operator precedence?
\`\`\`cpp
int a = 5, b = 3, c = 2;
int result = a + b * c > 10 ? a : b;
cout << result;
\`\`\``,
        options: {
          a: "5",
          b: "3",
          c: "11",
          d: "1",
        },
        correct: "b",
      },
      {
        id: 6,
        question: `Trace the function calls and determine the output:
\`\`\`cpp
int f(int x) {
    cout << x << " ";
    if (x > 0) return f(x - 2);
    return 0;
}
int main() {
    f(5);
    return 0;
}
\`\`\``,
        options: {
          a: "5 3 1 -1",
          b: "5 3 1",
          c: "5 3 1 -1 -3",
          d: "Stack overflow",
        },
        correct: "a",
      },

      // C/C++ Theory/Syntax Questions (6)
      {
        id: 7,
        question: "What does the scope resolution operator `::` do in C++?",
        options: {
          a: "Access private members of a class",
          b: "Access global variables when local variables have the same name",
          c: "Create a pointer to member function",
          d: "Define template specialization",
        },
        correct: "b",
      },
      {
        id: 8,
        question:
          "What is the primary purpose of the `explicit` keyword in C++?",
        options: {
          a: "Make constructors virtual",
          b: "Prevent implicit type conversions through constructors",
          c: "Allow multiple inheritance",
          d: "Enable operator overloading",
        },
        correct: "b",
      },
      {
        id: 9,
        question:
          "What is the key difference between `struct` and `class` in C++?",
        options: {
          a: "struct cannot have constructors, class can",
          b: "struct members are public by default, class members are private by default",
          c: "struct cannot inherit, class can",
          d: "struct is for C compatibility only",
        },
        correct: "b",
      },
      {
        id: 10,
        question: "What does the `mutable` keyword allow in C++?",
        options: {
          a: "Modify const objects",
          b: "Change member variables in const member functions",
          c: "Create virtual destructors",
          d: "Enable multiple inheritance",
        },
        correct: "b",
      },
      {
        id: 11,
        question:
          "Which of the following declarations is syntactically INVALID in C++?",
        options: {
          a: "int* const ptr = &x;",
          b: "const int* ptr = &x;",
          c: "int const* const ptr = &x;",
          d: "const* int ptr = &x;",
        },
        correct: "d",
      },
      {
        id: 12,
        question: "What does the `volatile` keyword indicate to the compiler?",
        options: {
          a: "The variable can be modified by multiple threads",
          b: "The variable's value may change unexpectedly",
          c: "The variable should not be optimized",
          d: "All of the above",
        },
        correct: "d",
      },

      // Pseudocode Questions (3)
      {
        id: 13,
        question: `What is the output of this pseudocode?
\`\`\`
BEGIN
    SET sum = 0
    SET i = 1
    WHILE i <= 5 DO
        IF i MOD 2 = 0 THEN
            SET sum = sum + i
        END IF
        SET i = i + 1
    END WHILE
    PRINT sum
END
\`\`\``,
        options: {
          a: "6",
          b: "15",
          c: "10",
          d: "8",
        },
        correct: "a",
      },
      {
        id: 14,
        question: `What value will be printed by this pseudocode?
\`\`\`
BEGIN
    SET x = 3
    SET y = 0
    FOR i FROM 1 TO x DO
        SET y = y + i * 2
    END FOR
    PRINT y
END
\`\`\``,
        options: {
          a: "6",
          b: "12",
          c: "18",
          d: "24",
        },
        correct: "b",
      },
      {
        id: 15,
        question: `Calculate the final value of 'result':
\`\`\`
BEGIN
    SET result = 1
    SET n = 4
    REPEAT
        SET result = result * n
        SET n = n - 1
    UNTIL n = 0
    PRINT result
END
\`\`\``,
        options: {
          a: "24",
          b: "12",
          c: "6",
          d: "4",
        },
        correct: "a",
      },

      // Flowchart Questions (2)
      {
        id: 16,
        question:
          "In a standard flowchart, which shape is used to represent a decision point?",
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
          a: "Process or calculation",
          b: "Start or end point",
          c: "Input or output operation",
          d: "Decision point",
        },
        correct: "c",
      },

      // SQL Code-based Questions (6)
      {
        id: 18,
        question: `Given tables: EMPLOYEES (id, name, dept_id, salary) and DEPARTMENTS (id, name). What will this query return?
\`\`\`sql
SELECT e.name, d.name 
FROM EMPLOYEES e 
RIGHT JOIN DEPARTMENTS d ON e.dept_id = d.id 
WHERE e.salary > 50000;
\`\`\``,
        options: {
          a: "All employees with salary > 50000 and their departments",
          b: "All departments and their employees with salary > 50000",
          c: "Only employees with salary > 50000, departments without such employees are excluded",
          d: "All departments, but only employees with salary > 50000",
        },
        correct: "c",
      },
      {
        id: 19,
        question: `What is the output of this query on a table PRODUCTS (category, price)?
\`\`\`sql
SELECT category, COUNT(*), AVG(price)
FROM PRODUCTS 
WHERE price > 100
GROUP BY category
HAVING COUNT(*) > 2;
\`\`\``,
        options: {
          a: "Categories with more than 2 products regardless of price",
          b: "Categories with more than 2 products priced above 100",
          c: "All categories with their count and average price",
          d: "Categories with average price > 100 and more than 2 products",
        },
        correct: "b",
      },
      {
        id: 20,
        question: `Which of these subqueries will execute correctly?
\`\`\`sql
SELECT * FROM ORDERS 
WHERE customer_id IN (
    SELECT id FROM CUSTOMERS 
    WHERE city = 'New York' AND status = 'Active'
);
\`\`\``,
        options: {
          a: "Always executes correctly",
          b: "Fails if subquery returns NULL",
          c: "Fails if subquery returns multiple columns",
          d: "Fails if main query has no matching records",
        },
        correct: "a",
      },
      {
        id: 21,
        question: `What's wrong with this SQL query?
\`\`\`sql
SELECT name, salary, department
FROM employees
WHERE department = 'IT'
GROUP BY department
HAVING salary > 50000;
\`\`\``,
        options: {
          a: "Cannot use WHERE and HAVING together",
          b: "name and salary must be in GROUP BY or aggregate functions",
          c: "HAVING should come before GROUP BY",
          d: "Nothing is wrong",
        },
        correct: "b",
      },
      {
        id: 22,
        question: `Given table SALES (date, amount), what does this query return?
\`\`\`sql
SELECT date, amount,
       amount - LAG(amount) OVER (ORDER BY date) as difference
FROM SALES;
\`\`\``,
        options: {
          a: "Each sale and its difference from the next sale",
          b: "Each sale and its difference from the previous sale",
          c: "Each sale and the total difference from first sale",
          d: "Syntax error - invalid window function",
        },
        correct: "b",
      },
      {
        id: 23,
        question: `Which query correctly finds duplicate names in a USERS table?
\`\`\`sql
-- Option A
SELECT name FROM USERS GROUP BY name HAVING COUNT(*) > 1;

-- Option B  
SELECT DISTINCT name FROM USERS WHERE name IN (
    SELECT name FROM USERS GROUP BY name HAVING COUNT(*) > 1
);
\`\`\``,
        options: {
          a: "Only Option A is correct",
          b: "Only Option B is correct",
          c: "Both are correct but return different results",
          d: "Both are correct and return identical results",
        },
        correct: "d",
      },

      // SQL Theory Questions (6)
      {
        id: 24,
        question:
          "What is the main difference between WHERE and HAVING clauses?",
        options: {
          a: "WHERE filters rows before grouping, HAVING filters groups after grouping",
          b: "WHERE is for SELECT, HAVING is for UPDATE",
          c: "WHERE uses column names, HAVING uses aggregate functions only",
          d: "No significant difference",
        },
        correct: "a",
      },
      {
        id: 25,
        question:
          "In a database transaction, what happens when ROLLBACK is executed?",
        options: {
          a: "Only the last statement is undone",
          b: "All changes since the last COMMIT are undone",
          c: "The entire database is restored to previous backup",
          d: "Only INSERT statements are undone",
        },
        correct: "b",
      },
      {
        id: 26,
        question: "Which statements belong to DDL (Data Definition Language)?",
        options: {
          a: "SELECT, INSERT, UPDATE, DELETE",
          b: "CREATE, ALTER, DROP, TRUNCATE",
          c: "GRANT, REVOKE, COMMIT, ROLLBACK",
          d: "BEGIN, END, IF, WHILE",
        },
        correct: "b",
      },
      {
        id: 27,
        question: "What is the primary purpose of database indexing?",
        options: {
          a: "Reduce storage space",
          b: "Improve query performance for SELECT operations",
          c: "Ensure data integrity",
          d: "Enable foreign key relationships",
        },
        correct: "b",
      },
      {
        id: 28,
        question:
          "Which factor does NOT typically improve SQL query performance?",
        options: {
          a: "Using appropriate indexes",
          b: "Avoiding SELECT * statements",
          c: "Using more JOINs instead of subqueries",
          d: "Adding WHERE clauses to limit result sets",
        },
        correct: "c",
      },
      {
        id: 29,
        question:
          "What is the ACID property 'Isolation' in database transactions?",
        options: {
          a: "Transactions are processed one at a time",
          b: "Concurrent transactions don't interfere with each other",
          c: "Data remains consistent after transaction completion",
          d: "All operations in a transaction succeed or all fail",
        },
        correct: "b",
      },

      // HTML/CSS Code-based Questions (3)
      {
        id: 30,
        question: `What will be the text color of the paragraph?
\`\`\`html
<div class="container" id="main">
    <p class="text" id="para">Hello World</p>
</div>
\`\`\`
\`\`\`css
#main p { color: red; }
.container .text { color: blue; }
#para { color: green; }
p.text { color: yellow; }
\`\`\``,
        options: {
          a: "red",
          b: "blue",
          c: "green",
          d: "yellow",
        },
        correct: "c",
      },
      {
        id: 31,
        question: `What will be the display behavior with this CSS?
\`\`\`css
@media screen and (max-width: 768px) {
    .sidebar { display: none; }
    .main { width: 100%; }
}
@media screen and (min-width: 769px) {
    .sidebar { width: 25%; }
    .main { width: 75%; }
}
\`\`\``,
        options: {
          a: "Sidebar always hidden",
          b: "Sidebar visible on screens wider than 768px",
          c: "Sidebar visible on screens 768px and narrower",
          d: "Both rules apply simultaneously",
        },
        correct: "b",
      },
      {
        id: 32,
        question: `What is the rendered output of this HTML/CSS?
\`\`\`html
<div class="box">
    <span>A</span><span>B</span><span>C</span>
</div>
\`\`\`
\`\`\`css
.box span {
    display: inline-block;
    width: 50px;
    margin: 10px;
}
.box span:nth-child(2) {
    margin-left: 0;
}
\`\`\``,
        options: {
          a: "A, B, C with equal spacing",
          b: "A and B closer together, C normal spacing",
          c: "B and C closer together, A normal spacing",
          d: "All spans stacked vertically",
        },
        correct: "b",
      },

      // HTML/CSS Theory Questions (2)
      {
        id: 33,
        question:
          "Which HTML5 semantic element should be used for a standalone piece of content?",
        options: {
          a: "<section>",
          b: "<article>",
          c: "<aside>",
          d: "<div>",
        },
        correct: "b",
      },
      {
        id: 34,
        question:
          "In CSS specificity calculation, what has the highest priority?",
        options: {
          a: "Element selectors",
          b: "Class selectors",
          c: "ID selectors",
          d: "Inline styles",
        },
        correct: "d",
      },

      // OOP Code-based Questions (4)
      {
        id: 35,
        question: `What is the output of this C++ code?
\`\`\`cpp
class Base {
public:
    Base() { cout << "B"; }
    ~Base() { cout << "~B"; }
};
class Derived : public Base {
public:
    Derived() { cout << "D"; }
    ~Derived() { cout << "~D"; }
};
int main() {
    Derived d;
    return 0;
}
\`\`\``,
        options: {
          a: "BD~D~B",
          b: "BD~B~D",
          c: "DB~D~B",
          d: "DB~B~D",
        },
        correct: "a",
      },
      {
        id: 36,
        question: `What will be printed by this virtual function example?
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
          d: "Both sounds printed",
        },
        correct: "b",
      },
      {
        id: 37,
        question: `What is the result of this method overloading?
\`\`\`cpp
class Calculator {
public:
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
};
int main() {
    Calculator calc;
    cout << calc.add(5, 3) << " " << calc.add(5.5, 2.3);
    return 0;
}
\`\`\``,
        options: {
          a: "8 7.8",
          b: "8.0 7.8",
          c: "8 7",
          d: "Compilation error",
        },
        correct: "a",
      },
      {
        id: 38,
        question: `What happens with this multiple inheritance scenario?
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
};
int main() {
    C obj;
    obj.A::func();
    return 0;
}
\`\`\``,
        options: {
          a: "Prints 'A'",
          b: "Prints 'B'",
          c: "Compilation error - ambiguous call",
          d: "Prints 'AB'",
        },
        correct: "a",
      },

      // OOP Theory Questions (4)
      {
        id: 39,
        question:
          "Which OOP principle is primarily achieved through access modifiers (private, protected, public)?",
        options: {
          a: "Inheritance",
          b: "Polymorphism",
          c: "Encapsulation",
          d: "Abstraction",
        },
        correct: "c",
      },
      {
        id: 40,
        question:
          "What type of polymorphism is achieved through virtual functions in C++?",
        options: {
          a: "Compile-time polymorphism",
          b: "Runtime polymorphism",
          c: "Static polymorphism",
          d: "Parametric polymorphism",
        },
        correct: "b",
      },
      {
        id: 41,
        question: "In object-oriented design, what is the 'IS-A' relationship?",
        options: {
          a: "Composition",
          b: "Aggregation",
          c: "Inheritance",
          d: "Association",
        },
        correct: "c",
      },
      {
        id: 42,
        question:
          "What is the main difference between abstract classes and interfaces?",
        options: {
          a: "Abstract classes can have constructors, interfaces cannot",
          b: "Interfaces support multiple inheritance, abstract classes do not",
          c: "Abstract classes can have implemented methods, interfaces cannot (traditionally)",
          d: "No significant difference",
        },
        correct: "c",
      },

      // Algorithm Questions (8 remaining, need 2 more)
      {
        id: 43,
        question: "What is the average time complexity of Quick Sort?",
        options: {
          a: "O(n)",
          b: "O(n log n)",
          c: "O(n²)",
          d: "O(log n)",
        },
        correct: "b",
      },
      {
        id: 44,
        question: "Which sorting algorithm is stable?",
        options: {
          a: "Quick Sort",
          b: "Selection Sort",
          c: "Merge Sort",
          d: "Heap Sort",
        },
        correct: "c",
      },
      {
        id: 45,
        question: "For a nearly sorted array, which algorithm performs best?",
        options: {
          a: "Bubble Sort",
          b: "Quick Sort",
          c: "Insertion Sort",
          d: "Selection Sort",
        },
        correct: "c",
      },
      {
        id: 46,
        question: "What is the space complexity of Merge Sort?",
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
        question: "Binary Search requires the array to be:",
        options: {
          a: "Randomly distributed",
          b: "Sorted",
          c: "Of even length",
          d: "Containing unique elements only",
        },
        correct: "b",
      },
      {
        id: 48,
        question:
          "Which algorithm is best for finding the shortest path in an unweighted graph?",
        options: {
          a: "DFS",
          b: "BFS",
          c: "Dijkstra's Algorithm",
          d: "Prim's Algorithm",
        },
        correct: "b",
      },
      {
        id: 49,
        question: "What type of algorithm is Dijkstra's Algorithm?",
        options: {
          a: "Divide and Conquer",
          b: "Dynamic Programming",
          c: "Greedy Algorithm",
          d: "Backtracking",
        },
        correct: "c",
      },
      {
        id: 50,
        question: "Prim's Algorithm is used for:",
        options: {
          a: "Finding shortest path between two nodes",
          b: "Finding minimum spanning tree",
          c: "Topological sorting",
          d: "Graph coloring",
        },
        correct: "b",
      },
    ],
  },

  exam9: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
     cat: "Technical Mock Exam",
    questions: [
      // ======== C/C++ (12 questions) ========
      {
        id: 1,
        question:
          "What will be the output of the following C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int x = 5;\n    int *p = &x;\n    *p = *p + 2;\n    cout << x;\n}\n```",
        options: { a: "5", b: "7", c: "2", d: "Compilation Error" },
        correct: "b",
      },
      {
        id: 2,
        question: "What does the C++ scope resolution operator `::` do?",
        options: {
          a: "Access members via pointer",
          b: "Resolve ambiguity between local and global identifiers",
          c: "Dereference a pointer",
          d: "Create a reference variable",
        },
        correct: "b",
      },
      {
        id: 3,
        question:
          "What will the following code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint f(int n){\n    if(n <= 1) return 1;\n    return n * f(n-2);\n}\nint main(){\n    cout << f(5);\n}\n```",
        options: { a: "15", b: "8", c: "10", d: "5" },
        correct: "a",
      },
      {
        id: 4,
        question:
          "Which keyword allows a non-member function to access private members of a class?",
        options: { a: "public", b: "friend", c: "protected", d: "mutable" },
        correct: "b",
      },
      {
        id: 5,
        question:
          "Identify the output:\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int arr[] = {1, 2, 3};\n    int *p = arr;\n    cout << *(p+1);\n}\n```",
        options: { a: "1", b: "2", c: "3", d: "Garbage" },
        correct: "b",
      },
      {
        id: 6,
        question:
          "Which of the following operators cannot be overloaded in C++?",
        options: {
          a: "operator->",
          b: "operator()",
          c: "operator::",
          d: "operator[]",
        },
        correct: "c",
      },
      {
        id: 7,
        question:
          "What is the output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int x = 10;\n    const int &ref = x;\n    x = 20;\n    cout << ref;\n}\n```",
        options: { a: "10", b: "20", c: "Compilation Error", d: "Undefined" },
        correct: "b",
      },
      {
        id: 8,
        question: "In C++, the `mutable` keyword is primarily used for:",
        options: {
          a: "Allowing a member to be modified even if the object is const",
          b: "Changing the type of a variable at runtime",
          c: "Defining a variable with dynamic size",
          d: "Preventing modification of a variable",
        },
        correct: "a",
      },
      {
        id: 9,
        question:
          "What will happen if you access memory beyond the bounds of an array in C++?",
        options: {
          a: "Compilation Error",
          b: "Segmentation fault or undefined behavior",
          c: "Value will be 0",
          d: "Array will resize automatically",
        },
        correct: "b",
      },
      {
        id: 10,
        question:
          "Which preprocessor directive is used to prevent multiple inclusions of the same header file?",
        options: {
          a: "#include",
          b: "#define",
          c: "#ifndef / #define / #endif",
          d: "#pragma once only",
        },
        correct: "c",
      },
      {
        id: 11,
        question:
          "Output of:\n```cpp\n#include <iostream>\nusing namespace std;\nvoid f(int a, int b = 2, int c = 3){\n    cout << a << b << c;\n}\nint main(){\n    f(1,4);\n}\n```",
        options: { a: "143", b: "124", c: "142", d: "134" },
        correct: "a",
      },
      {
        id: 12,
        question:
          "Which statement about `struct` and `class` in C++ is correct?",
        options: {
          a: "They are identical; no difference in C++",
          b: "Members of a struct are private by default, class members are public",
          c: "Struct members are public by default, class members are private",
          d: "Struct cannot have member functions",
        },
        correct: "c",
      },

      // ======== Pseudocode & Flowchart (5 questions) ========
      {
        id: 13,
        question:
          "Given pseudocode:\n```\ncount ← 0\nfor i = 1 to 5 do\n   for j = i to 5 do\n      count ← count + 1\nprint count\n```\nWhat is the output?",
        options: { a: "15", b: "10", c: "5", d: "20" },
        correct: "a",
      },
      {
        id: 14,
        question:
          "Pseudocode:\n```\nx ← 2\ny ← 0\nwhile x < 5 do\n   y ← y + x\n   x ← x + 1\nprint y\n```\nOutput?",
        options: { a: "5", b: "6", c: "7", d: "8" },
        correct: "c",
      },
      {
        id: 15,
        question: "In a flowchart, which shape represents a decision?",
        options: {
          a: "Oval",
          b: "Diamond",
          c: "Rectangle",
          d: "Parallelogram",
        },
        correct: "b",
      },
      {
        id: 16,
        question: "Which flowchart symbol is used for input/output operations?",
        options: {
          a: "Oval",
          b: "Diamond",
          c: "Rectangle",
          d: "Parallelogram",
        },
        correct: "d",
      },
      {
        id: 17,
        question:
          "Pseudocode:\n```\nsum ← 0\nfor i = 1 to 3 do\n   sum ← sum + i*i\nprint sum\n```\nOutput?",
        options: { a: "6", b: "9", c: "14", d: "12" },
        correct: "c",
      },

      // ======== SQL (12 questions) ========
      {
        id: 18,
        question:
          "What will this SQL query return?\n```sql\nSELECT COUNT(*)\nFROM employees\nWHERE department_id = 10 AND salary > 5000;\n```",
        options: {
          a: "Number of employees in dept 10 earning over 5000",
          b: "Total employees",
          c: "Sum of salaries",
          d: "Syntax error",
        },
        correct: "a",
      },
      {
        id: 19,
        question: "Which SQL keyword is used to sort results?",
        options: { a: "SORT", b: "ORDER BY", c: "GROUP BY", d: "ALIGN" },
        correct: "b",
      },
      {
        id: 20,
        question:
          "What does the following query output?\n```sql\nSELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 5;\n```",
        options: {
          a: "All departments",
          b: "Departments with more than 5 employees",
          c: "Employees with ID > 5",
          d: "Error",
        },
        correct: "b",
      },
      {
        id: 21,
        question:
          "Which SQL command removes all rows from a table but keeps the structure?",
        options: { a: "DELETE", b: "TRUNCATE", c: "DROP", d: "REMOVE" },
        correct: "b",
      },
      {
        id: 22,
        question: "Difference between WHERE and HAVING?",
        options: {
          a: "WHERE filters rows before grouping; HAVING filters after grouping",
          b: "HAVING filters rows before grouping; WHERE after",
          c: "Both are identical",
          d: "WHERE is for SELECT, HAVING is for UPDATE",
        },
        correct: "a",
      },
      {
        id: 23,
        question: "Which SQL command is DDL?",
        options: { a: "INSERT", b: "UPDATE", c: "CREATE", d: "DELETE" },
        correct: "c",
      },
      {
        id: 24,
        question:
          "What will happen?\n```sql\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nROLLBACK;\n```",
        options: {
          a: "Balance decreases by 100",
          b: "No change to balance",
          c: "Error",
          d: "Partial update",
        },
        correct: "b",
      },
      {
        id: 25,
        question: "In indexing, what does a clustered index do?",
        options: {
          a: "Stores rows physically in the order of the index",
          b: "Creates a separate index table",
          c: "Always unique",
          d: "Stores null values first",
        },
        correct: "a",
      },
      {
        id: 26,
        question: "Which join returns only matching rows from both tables?",
        options: {
          a: "LEFT JOIN",
          b: "RIGHT JOIN",
          c: "INNER JOIN",
          d: "FULL JOIN",
        },
        correct: "c",
      },
      {
        id: 27,
        question: "What is the output?\n```sql\nSELECT 10/4;\n```",
        options: { a: "2", b: "2.5", c: "Depends on SQL mode", d: "Error" },
        correct: "c",
      },
      {
        id: 28,
        question:
          "Which is faster for searching: indexed column or non-indexed column?",
        options: {
          a: "Indexed",
          b: "Non-indexed",
          c: "Same speed",
          d: "Depends on server",
        },
        correct: "a",
      },
      {
        id: 29,
        question: "Which SQL keyword undoes a transaction?",
        options: { a: "UNDO", b: "ROLLBACK", c: "REVERSE", d: "CANCEL" },
        correct: "b",
      },

      // ======== HTML/CSS (5 questions) ========
      {
        id: 30,
        question:
          'What is the output of:\n```html\n<p style="color: red; color: blue;">Hello</p>\n```',
        options: {
          a: "Red text",
          b: "Blue text",
          c: "Browser error",
          d: "Random",
        },
        correct: "b",
      },
      {
        id: 31,
        question: "Which HTML tag represents emphasized text?",
        options: { a: "<strong>", b: "<em>", c: "<mark>", d: "<i>" },
        correct: "b",
      },
      {
        id: 32,
        question: "In CSS, which selector has the highest specificity?",
        options: { a: "p", b: ".class", c: "#id", d: "p > span" },
        correct: "c",
      },
      {
        id: 33,
        question: "Which media query matches screens less than 600px wide?",
        options: {
          a: "@media(max-width: 600px)",
          b: "@media(min-width: 600px)",
          c: "@media-width: 600px",
          d: "@media less 600px",
        },
        correct: "a",
      },
      {
        id: 34,
        question:
          "Which HTML element improves accessibility by defining navigation links?",
        options: { a: "<nav>", b: "<section>", c: "<header>", d: "<article>" },
        correct: "a",
      },

      // ======== OOP (8 questions) ========
      {
        id: 35,
        question:
          'What is the output?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A{\npublic: A(){cout << "A";}\n};\nclass B: public A{\npublic: B(){cout << "B";}\n};\nint main(){ B obj; }\n```',
        options: { a: "B", b: "AB", c: "BA", d: "Compilation Error" },
        correct: "b",
      },
      {
        id: 36,
        question:
          "In OOP, which concept allows different classes to be treated as the same type through a common interface?",
        options: {
          a: "Encapsulation",
          b: "Polymorphism",
          c: "Abstraction",
          d: "Inheritance",
        },
        correct: "b",
      },
      {
        id: 37,
        question:
          'What will this code output?\n```cpp\n#include <iostream>\nusing namespace std;\nclass Base{\npublic: virtual void show(){cout << "Base";}\n};\nclass Derived: public Base{\npublic: void show(){cout << "Derived";}\n};\nint main(){ Base *b = new Derived(); b->show(); }\n```',
        options: { a: "Base", b: "Derived", c: "Error", d: "Undefined" },
        correct: "b",
      },
      {
        id: 38,
        question:
          "Which OOP principle is violated if all data members of a class are public?",
        options: {
          a: "Encapsulation",
          b: "Polymorphism",
          c: "Abstraction",
          d: "Inheritance",
        },
        correct: "a",
      },
      {
        id: 39,
        question: "In C++, which destructor call order is correct?",
        options: {
          a: "Base then Derived",
          b: "Derived then Base",
          c: "Random",
          d: "Only Base",
        },
        correct: "b",
      },
      {
        id: 40,
        question:
          "Which relationship best describes 'Car' inherits from 'Vehicle'?",
        options: { a: "Has-a", b: "Is-a", c: "Part-of", d: "Contains" },
        correct: "b",
      },
      {
        id: 41,
        question: "Overloading differs from overriding because:",
        options: {
          a: "Overloading changes method name",
          b: "Overriding changes parameters",
          c: "Overloading changes parameters, overriding changes implementation",
          d: "Both are the same",
        },
        correct: "c",
      },
      {
        id: 42,
        question:
          "Which concept hides implementation details and shows only the essential features?",
        options: {
          a: "Polymorphism",
          b: "Abstraction",
          c: "Encapsulation",
          d: "Inheritance",
        },
        correct: "b",
      },

      // ======== Algorithms (10 questions) ========
      {
        id: 43,
        question:
          "Which sorting algorithm is stable and works in O(n log n) time in all cases?",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Heap Sort",
          d: "Selection Sort",
        },
        correct: "b",
      },
      {
        id: 44,
        question: "Best-case time complexity of Insertion Sort?",
        options: { a: "O(n)", b: "O(n log n)", c: "O(n^2)", d: "O(log n)" },
        correct: "a",
      },
      {
        id: 45,
        question:
          "Which algorithm is best for finding shortest path in a graph with non-negative weights?",
        options: { a: "Prim's", b: "DFS", c: "Dijkstra's", d: "BFS" },
        correct: "c",
      },
      {
        id: 46,
        question:
          "Given steps: 1) Choose pivot 2) Partition array 3) Recursively sort subarrays — which algorithm?",
        options: {
          a: "Merge Sort",
          b: "Quick Sort",
          c: "Selection Sort",
          d: "Heap Sort",
        },
        correct: "b",
      },
      {
        id: 47,
        question:
          "Which search algorithm works in O(log n) time only on sorted data?",
        options: { a: "Linear Search", b: "Binary Search", c: "DFS", d: "BFS" },
        correct: "b",
      },
      {
        id: 48,
        question:
          "Which algorithm's time complexity is O(V^2) for adjacency matrix and better with a priority queue?",
        options: { a: "Prim's", b: "BFS", c: "DFS", d: "Selection Sort" },
        correct: "a",
      },
      {
        id: 49,
        question: "Bubble Sort is considered inefficient because:",
        options: {
          a: "It is unstable",
          b: "It requires extra space",
          c: "It has O(n^2) average and worst-case time complexity",
          d: "It cannot sort integers",
        },
        correct: "c",
      },
      {
        id: 50,
        question:
          "Which traversal algorithm uses a stack (implicit or explicit) and explores as far as possible along each branch?",
        options: { a: "BFS", b: "DFS", c: "Dijkstra's", d: "Prim's" },
        correct: "b",
      },
    ],
  },

  exam10: {
    title: "C++ Object-Oriented Programming - Comprehensive Exam",
    cat: "OOP",
    questions: [
      {
        id: 1,
        question: "What is the implicit return type of constructor?",
        options: {
          a: "No return type",
          b: "A class object in which it is defined",
          c: "void",
          d: "None",
        },
        correct: "b",
      },
      {
        id: 2,
        question: "When is the object created with a new keyword?",
        options: {
          a: "At run time",
          b: "At compile time",
          c: "Depends on the code",
          d: "None",
        },
        correct: "a",
      },
      {
        id: 3,
        question: "Identify the incorrect constructor type.",
        options: {
          a: "Friend constructor",
          b: "Default constructor",
          c: "Parameterized constructor",
          d: "Copy constructor",
        },
        correct: "a",
      },
      {
        id: 4,
        question: "Identify the scope resolution operator.",
        options: {
          a: "::",
          b: "?:",
          c: "->",
          d: "None",
        },
        correct: "a",
      },
      {
        id: 5,
        question: "Choose the option below which is not a member of the class.",
        options: {
          a: "Friend function",
          b: "Static function",
          c: "Virtual function",
          d: "Const function",
        },
        correct: "a",
      },
      {
        id: 6,
        question: "Total types of constructors in C++ are?",
        options: {
          a: "1",
          b: "2",
          c: "3",
          d: "4",
        },
        correct: "c",
      },
      {
        id: 7,
        question:
          "What is the number of parameters that a default constructor requires?",
        options: {
          a: "0",
          b: "1",
          c: "2",
          d: "3",
        },
        correct: "a",
      },
      {
        id: 8,
        question:
          "Data members and member functions of a class are private by default. True or False?",
        options: {
          a: "True",
          b: "False",
          c: "Depends on code",
          d: "None",
        },
        correct: "a",
      },
      {
        id: 9,
        question:
          "Under which pillar of OOPS do base class and derived class relationships come?",
        options: {
          a: "Polymorphism",
          b: "Inheritance",
          c: "Encapsulation",
          d: "Abstraction",
        },
        correct: "b",
      },
      {
        id: 10,
        question:
          "Which of the following functions can be inherited from the base class?",
        options: {
          a: "Constructor",
          b: "Destructor",
          c: "Static",
          d: "None",
        },
        correct: "d",
      },
      {
        id: 11,
        question: "Which of the following is not a type of inheritance?",
        options: {
          a: "Multiple",
          b: "Multilevel",
          c: "Distributed",
          d: "Hierarchical",
        },
        correct: "c",
      },
      {
        id: 12,
        question: "What is an object in C++?",
        options: {
          a: "It is a function of class",
          b: "It is an instance of the class",
          c: "It is the data type of class",
          d: "It is part of the syntax of class",
        },
        correct: "b",
      },
      {
        id: 13,
        question: "Why is reusability a desirable feature?",
        options: {
          a: "Reduces compilation time",
          b: "Decreases testing time",
          c: "Lowers maintenance cost",
          d: "None",
        },
        correct: "c",
      },
      {
        id: 14,
        question: "Identify the operators which cannot be overloaded.",
        options: {
          a: "?:",
          b: ". (dot operator)",
          c: "Both A and B",
          d: "None of the above",
        },
        correct: "c",
      },
      {
        id: 15,
        question: "Another name of overloading is?",
        options: {
          a: "Pseudo polymorphism",
          b: "Transient polymorphism",
          c: "Virtual polymorphism",
          d: "Ad-hoc polymorphism",
        },
        correct: "d",
      },
      {
        id: 16,
        question: "By default, fields in a structure of a C program are?",
        options: {
          a: "public",
          b: "Private",
          c: "protected",
          d: "None",
        },
        correct: "a",
      },
      {
        id: 17,
        question:
          "On what basis is it determined, when a variable comes into existence in memory?",
        options: {
          a: "Data type",
          b: "Storage class",
          c: "Scope",
          d: "All of the above",
        },
        correct: "d",
      },
      {
        id: 18,
        question:
          "Identify the feature using which, one object can interact with another object.",
        options: {
          a: "Message passing",
          b: "Message reading",
          c: "Data binding",
          d: "Data transfer",
        },
        correct: "a",
      },
      {
        id: 19,
        question: "Total access specifiers in OOPS for C++ are?",
        options: {
          a: "1",
          b: "2",
          c: "3",
          d: "4",
        },
        correct: "c",
      },
      {
        id: 20,
        question: "Choose the option below which can show polymorphism.",
        options: {
          a: "Overloading ||",
          b: "Overloading <<",
          c: "Overloading &&",
          d: "Overloading +=",
        },
        correct: "b",
      },
      {
        id: 21,
        question: "Select the following which shows the correct constructor.",
        options: {
          a: "()class_name",
          b: "-class_name",
          c: "class_name()",
          d: "~class_name(",
        },
        correct: "c",
      },
      {
        id: 22,
        question:
          "To access data members of a class, which of the following is used?",
        options: {
          a: "Dot operator",
          b: "Arrow operator",
          c: "Dot or arrow operator, as required",
          d: "Dot, arrow, or direct call",
        },
        correct: "c",
      },
      {
        id: 23,
        question:
          "Identify the feature, which is used to reduce the use of nested classes.",
        options: {
          a: "Binding",
          b: "Inheritance",
          c: "Encapsulation",
          d: "Abstraction",
        },
        correct: "b",
      },
      {
        id: 24,
        question:
          "Choose the option below which is used to free the memory allocated for an object in C++.",
        options: {
          a: "Free()",
          b: "unallocate()",
          c: "delete",
          d: "collect",
        },
        correct: "c",
      },
      {
        id: 25,
        question:
          "Identify the option below which is not a property of the object.",
        options: {
          a: "Names",
          b: "Attributes",
          c: "Identity",
          d: "Properties",
        },
        correct: "a",
      },
      {
        id: 26,
        question:
          "What type of inheritance does single-level inheritance support?",
        options: {
          a: "Compile-time",
          b: "Runtime inheritance",
          c: "Multiple inheritances",
          d: "Language independent",
        },
        correct: "b",
      },
      {
        id: 27,
        question:
          "In which of the following is memory allocated for the objects?",
        options: {
          a: "RAM",
          b: "ROM",
          c: "Cache",
          d: "HDD",
        },
        correct: "a",
      },
      {
        id: 28,
        question: "How do encapsulation and abstraction differ?",
        options: {
          a: "Hiding and binding",
          b: "Binding and hiding",
          c: "Hiding and hiding",
          d: "None",
        },
        correct: "b",
      },
      {
        id: 29,
        question:
          "Choose the option below which is shown by function overriding.",
        options: {
          a: "Abstraction",
          b: "Encapsulation",
          c: "Polymorphism",
          d: "Inheritance",
        },
        correct: "c",
      },
      {
        id: 30,
        question:
          "Choose the option below for which instance of the class cannot be created.",
        options: {
          a: "Anonymous class",
          b: "Parent class",
          c: "Nested class",
          d: "Abstract class",
        },
        correct: "d",
      },
      {
        id: 31,
        question:
          "Identify the feature which can be implemented using encapsulation.",
        options: {
          a: "Abstraction",
          b: "Encapsulation",
          c: "Polymorphism",
          d: "Inheritance",
        },
        correct: "a",
      },
      {
        id: 32,
        question: "Why is a virtual function mainly used to achieve?",
        options: {
          a: "Function code polymorphism",
          b: "Interpreter polymorphism",
          c: "Compile-time polymorphism",
          d: "Runtime polymorphism",
        },
        correct: "d",
      },
      {
        id: 33,
        question: "Virtual functions should be defined in?",
        options: {
          a: "Derived class",
          b: "Base class",
          c: "Both base and derived class",
          d: "None",
        },
        correct: "b",
      },
      {
        id: 34,
        question: "Virtual function should be",
        options: {
          a: "public",
          b: "Private",
          c: "protected",
          d: "default",
        },
        correct: "a",
      },
      {
        id: 35,
        question:
          "Choose whether True or False: The constructor function can be constant.",
        options: {
          a: "True",
          b: "False",
          c: "Depends on implementation",
          d: "None",
        },
        correct: "b",
      },
      {
        id: 36,
        question: "Dynamic memory allocation can be done using?",
        options: {
          a: "calloc()",
          b: "malloc()",
          c: "Both (a) and (b)",
          d: "create()",
        },
        correct: "c",
      },
      {
        id: 37,
        question: "Total types of polymorphism in C++ are?",
        options: {
          a: "1",
          b: "2",
          c: "3",
          d: "4",
        },
        correct: "b",
      },
      {
        id: 38,
        question: "Another name of the generic class is?",
        options: {
          a: "Template class",
          b: "Final class",
          c: "Abstract class",
          d: "Efficient code",
        },
        correct: "a",
      },
      {
        id: 39,
        question:
          "Choose the option below which overloads using the friend function.",
        options: {
          a: ">>",
          b: "<<",
          c: "Both >> and <<",
          d: "None",
        },
        correct: "c",
      },
      {
        id: 40,
        question:
          "Choose whether True or False: Object cannot be passed as a function.",
        options: {
          a: "True",
          b: "False",
          c: "Depends on implementation",
          d: "None",
        },
        correct: "b",
      },
      {
        id: 41,
        question:
          "Identify the pure object-oriented programming language among the following.",
        options: {
          a: "C++",
          b: "SmallTalk",
          c: "Java",
          d: "Python",
        },
        correct: "b",
      },
      {
        id: 42,
        question: "Identify the abstract data type among the following.",
        options: {
          a: "double",
          b: "int",
          c: "class",
          d: "string",
        },
        correct: "c",
      },
      {
        id: 43,
        question:
          "What are the total catch blocks that can be used using a single Try block?",
        options: {
          a: "1",
          b: "2",
          c: "According to needs",
          d: "Maximum 256",
        },
        correct: "c",
      },
      {
        id: 44,
        question:
          "Choose the incorrect option below which is not a type of constructor.",
        options: {
          a: "Copy constructor",
          b: "Friend constructor",
          c: "Parameterized constructor",
          d: "Default constructor",
        },
        correct: "b",
      },
      {
        id: 45,
        question: "Total instances of an abstract class that can be created?",
        options: {
          a: "0",
          b: "1",
          c: "4",
          d: "8",
        },
        correct: "a",
      },
      {
        id: 46,
        question:
          "Identify the option below which cannot be used with the term 'virtual'.",
        options: {
          a: "constructor",
          b: "destructor",
          c: "class",
          d: "Member function",
        },
        correct: "a",
      },
     
      {
        id: 47,
        question:
          "Choose the option below which is used to implement late binding.",
        options: {
          a: "Friend function",
          b: "Static function",
          c: "Virtual function",
          d: "Const function",
        },
        correct: "c",
      },
      {
        id: 48,
        question: "What is cout?",
        options: {
          a: "Operator",
          b: "Object",
          c: "Function",
          d: "Macro",
        },
        correct: "b",
      },
      {
        id: 49,
        question:
          "Choose the option below which describes the overloading of functions.",
        options: {
          a: "Ad-hoc polymorphism",
          b: "Virtual polymorphism",
          c: "Pseudo polymorphism",
          d: "Transient polymorphism",
        },
        correct: "a",
      },
      {
        id: 50,
        question: "Who developed object-oriented programming?",
        options: {
          a: "Dennis Ritchie",
          b: "Charles Babbage",
          c: "Alan Kay",
          d: "Andrea Ferro",
        },
        correct: "c",
      },
      {
        id: 51,
        question: "Which of the following is not an OOPS concept?",
        options: {
          a: "Inheritance",
          b: "Compilation",
          c: "Polymorphism",
          d: "Encapsulation",
        },
        correct: "b",
      },
    ],
  },

  exam11: {
    title: "Object-Oriented Programming (OOP) - Comprehensive Exam",
    cat: "OOP",
    questions: [
      {
        id: 1,
        question: "Who invented OOP?",
        options: {
          a: "Andrea Ferro",
          b: "Adele Goldberg",
          c: "Alan Kay",
          d: "Dennis Ritchie",
        },
        correct: "c",
      },
      {
        id: 2,
        question: "Which is not a feature of OOP in general definitions?",
        options: {
          a: "Efficient Code",
          b: "Code reusability",
          c: "Modularity",
          d: "Duplicate/Redundant data",
        },
        correct: "d",
      },
      {
        id: 3,
        question:
          "Which was the first purely object oriented programming language developed?",
        options: {
          a: "Kotlin",
          b: "SmallTalk",
          c: "Java",
          d: "C++",
        },
        correct: "b",
      },
      {
        id: 4,
        question: "When OOP concept did first came into picture?",
        options: {
          a: "1980's",
          b: "1995",
          c: "1970's",
          d: "1993",
        },
        correct: "c",
      },
      {
        id: 5,
        question: "Which feature of OOP indicates code reusability?",
        options: {
          a: "Abstraction",
          b: "Polymorphism",
          c: "Encapsulation",
          d: "Inheritance",
        },
        correct: "d",
      },
      {
        id: 6,
        question: "Which header file is required in C++ to use OOP?",
        options: {
          a: "OOP can be used without using any header file",
          b: "stdlib.h",
          c: "iostream.h",
          d: "stdio.h",
        },
        correct: "a",
      },
      {
        id: 7,
        question: "Why Java is Partially OOP language?",
        options: {
          a: "It allows code to be written outside classes",
          b: "It supports usual declaration of primitive data types",
          c: "It does not support pointers",
          d: "It doesn't support all types of inheritance",
        },
        correct: "b",
      },
      {
        id: 8,
        question: "Which among the following doesn't come under OOP concept?",
        options: {
          a: "Data hiding",
          b: "Message passing",
          c: "Platform independent",
          d: "Data binding",
        },
        correct: "c",
      },
      {
        id: 9,
        question: "Which is the correct syntax of inheritance?",
        options: {
          a: "class base_classname :access derived_classname{/*define class body*/};",
          b: "class derived_classname: access base_classname{ /*define class body*/};",
          c: "class derived_classname: base_classname{/*define class body*/ };",
          d: "class base_classname: derived_classname{ /*define class body*/};",
        },
        correct: "b",
      },
      {
        id: 10,
        question:
          "Which feature of OOP is indicated by the following code?\nclass student{ int marks; };\nclass topper:public student{ int age; topper(int age){ this.age=age; } };",
        options: {
          a: "Encapsulation and Inheritance",
          b: "Inheritance and polymorphism",
          c: "Polymorphism",
          d: "Inheritance",
        },
        correct: "a",
      },
      {
        id: 11,
        question:
          "The feature by which one object can interact with another object is",
        options: {
          a: "Message reading",
          b: "Message Passing",
          c: "Data transfer",
          d: "Data Binding",
        },
        correct: "b",
      },
      {
        id: 12,
        question:
          "Which among the following, for a pure OOP language, is true?",
        options: {
          a: "The language should follow at least 1 feature of OOP",
          b: "The language must follow only 3 features of OOP",
          c: "The language must follow all the rules of OOP",
          d: "The language should follow 3 or more features of OOP",
        },
        correct: "c",
      },
      {
        id: 13,
        question:
          "How many types of access specifiers are provided in OOP (C++)?",
        options: {
          a: "4",
          b: "3",
          c: "2",
          d: "1",
        },
        correct: "b",
      },
      {
        id: 14,
        question:
          "In multilevel inheritance, which is the most significant feature of OOP used?",
        options: {
          a: "Code efficiency",
          b: "Code readability",
          c: "Flexibility",
          d: "Code reusability",
        },
        correct: "d",
      },
      {
        id: 15,
        question: "What is encapsulation in OOP?",
        options: {
          a: "It is a way of combining various data members and member functions that operate on those data members into a single unit",
          b: "It is a way of combining various data members and member functions into a single unit which can operate on any data",
          c: "It is a way of combining various data members into a single unit",
          d: "It is a way of combining various member functions into a single unit",
        },
        correct: "a",
      },
      {
        id: 16,
        question: "Which of the following is not true about polymorphism?",
        options: {
          a: "Helps in redefining the same functionality",
          b: "Increases overhead of function definition always",
          c: "It is feature of OOP",
          d: "Ease in readability of program",
        },
        correct: "b",
      },
      {
        id: 17,
        question:
          "Which constructor will be called from the object created in the below C++ code?\nclass A\n{\nint i;\nA()\n{\ni=0; cout<<i;\n}\nA(int x=0)\n{\ni=x; cout<< i;\n}\n};\nA obj1;",
        options: {
          a: "Parameterized constructor",
          b: "Default constructor",
          c: "Run time error",
          d: "Compile time error",
        },
        correct: "d",
      },
      {
        id: 18,
        question: "What is an abstraction in object-oriented programming?",
        options: {
          a: "Hiding the implementation and showing only the features",
          b: "Hiding the important data",
          c: "Hiding the implementation",
          d: "Showing the important data",
        },
        correct: "a",
      },
      {
        id: 19,
        question: "Which among the following can show polymorphism?",
        options: {
          a: "Overloading &&",
          b: "Overloading <<",
          c: "Overloading ||",
          d: "Overloading +=",
        },
        correct: "b",
      },
      {
        id: 20,
        question:
          "In which access should a constructor be defined, so that object of the class can be created in any function?",
        options: {
          a: "Any access specifier will work",
          b: "Private",
          c: "Public",
          d: "Protected",
        },
        correct: "c",
      },
      {
        id: 21,
        question:
          "Which among the following is correct for the class defined below?\nclass student\n{\nint marks;\npublic: student(){}\nstudent(int x)\n{\nmarks=x;\n}\n};\nmain()\n{\nstudent s1(100);\nstudent s2();\nstudent s3=100;\nreturn 0;\n}",
        options: {
          a: "Program will give compile time error",
          b: "Object s3, syntax error",
          c: "Only object s1 and s2 will be created",
          d: "Program runs and all objects are created",
        },
        correct: "d",
      },
      {
        id: 22,
        question: "The copy constructors can be used to",
        options: {
          a: "Copy an object so that it can be passed to another primitive type variable",
          b: "Copy an object for type casting",
          c: "Copy an object so that it can be passed to a function",
          d: "Copy an object so that it can be passed to a class",
        },
        correct: "c",
      },
      {
        id: 23,
        question:
          "Which constructor will be called from the object obj2 in the following C++ program?\nclass A\n{\nint i;\nA()\n{\ni=0;\n}\nA(int x)\n{\ni=x+1;\n}\nA(int y, int x)\n{\ni=x+y;\n}\n};\nA obj1(10);\nA obj2(10,20);\nA obj3;",
        options: {
          a: "A(int y, int x)",
          b: "A(int y; int x)",
          c: "A(int y)",
          d: "A(int x)",
        },
        correct: "a",
      },
      {
        id: 24,
        question: "Which among the following represents correct constructor?",
        options: {
          a: "-classname()",
          b: "classname()",
          c: "()classname",
          d: "~classname()",
        },
        correct: "b",
      },
      {
        id: 25,
        question: "What happens when an object is passed by reference?",
        options: {
          a: "Destructor is called at end of function",
          b: "Destructor is called when called explicitly",
          c: "Destructor is not called",
          d: "Destructor is called when function is out of scope",
        },
        correct: "c",
      },
      {
        id: 26,
        question:
          "Which access specifier is usually used for data members of a class?",
        options: {
          a: "Protected",
          b: "Private",
          c: "Public",
          d: "Default",
        },
        correct: "b",
      },
      {
        id: 27,
        question: "How to access data members of a class?",
        options: {
          a: "Dot, arrow or direct call",
          b: "Dot operator",
          c: "Arrow operator",
          d: "Dot or arrow as required",
        },
        correct: "d",
      },
      {
        id: 28,
        question: "Which feature of OOP reduces the use of nested classes?",
        options: {
          a: "Inheritance",
          b: "Binding",
          c: "Abstraction",
          d: "Encapsulation",
        },
        correct: "a",
      },
      {
        id: 29,
        question:
          "Which keyword among the following can be used to declare an array of objects in java?",
        options: {
          a: "allocate",
          b: "arr",
          c: "new",
          d: "create",
        },
        correct: "c",
      },
      {
        id: 30,
        question:
          "Which operator can be used to free the memory allocated for an object in C++?",
        options: {
          a: "Unallocate",
          b: "Free()",
          c: "Collect",
          d: "delete",
        },
        correct: "d",
      },
      {
        id: 31,
        question: "Which of the following is not a property of an object?",
        options: {
          a: "Properties",
          b: "Names",
          c: "Identity",
          d: "Attributes",
        },
        correct: "b",
      },
      {
        id: 32,
        question:
          "Which type of members can't be accessed in derived classes of a base class?",
        options: {
          a: "All can be accessed",
          b: "Protected",
          c: "Private",
          d: "Public",
        },
        correct: "c",
      },
      {
        id: 33,
        question: "Which among the following best describes the Inheritance?",
        options: {
          a: "Using the data and functions into derived segment",
          b: "Using already defined functions in a programming language",
          c: "Using the code already written once",
          d: "Copying the code already written",
        },
        correct: "a",
      },
      {
        id: 34,
        question: "Single level inheritance supports",
        options: {
          a: "Language independency",
          b: "Multiple inheritance",
          c: "Compile time",
          d: "Runtime",
        },
        correct: "d",
      },
      {
        id: 35,
        question: "How to overcome diamond problem?",
        options: {
          a: "Using separate derived class",
          b: "Using virtual keyword with same name function",
          c: "Can't be done",
          d: "Using alias name",
        },
        correct: "b",
      },
      {
        id: 36,
        question: "Which keyword is used to declare virtual functions?",
        options: {
          a: "virt",
          b: "virtually",
          c: "virtual",
          d: "anonymous",
        },
        correct: "c",
      },
      {
        id: 37,
        question:
          "What happens if non static members are used in static member function?",
        options: {
          a: "Executes fine",
          b: "Compile time error",
          c: "Executes if that member function is not used",
          d: "Runtime error",
        },
        correct: "b",
      },
      {
        id: 38,
        question: "What is friend member functions in C++?",
        options: {
          a: "Non-member functions which have access to all the members (including private) of a class",
          b: "Member function which doesn't have access to private members",
          c: "Member function which can modify any data of a class",
          d: "Member function which can access all the members of a class",
        },
        correct: "a",
      },
      {
        id: 39,
        question: "Where is the memory allocated for the objects?",
        options: {
          a: "Cache",
          b: "ROM",
          c: "HDD",
          d: "RAM",
        },
        correct: "d",
      },
      {
        id: 40,
        question:
          "Which of the following best describes member function overriding?",
        options: {
          a: "Member functions having the same name in derived class only",
          b: "Member functions having the same name and different signature inside main function",
          c: "Member functions having the same name in base and derived classes",
          d: "Member functions having the same name in base class only",
        },
        correct: "c",
      },
      {
        id: 41,
        question: "Encapsulation and abstraction differ as",
        options: {
          a: "Hiding and hiding respectively",
          b: "Binding and Hiding respectively",
          c: "Hiding and Binding respectively",
          d: "Can be used any way",
        },
        correct: "b",
      },
      {
        id: 42,
        question:
          "Which feature of OOP is exhibited by the function overriding?",
        options: {
          a: "Polymorphism",
          b: "Encapsulation",
          c: "Abstraction",
          d: "Inheritance",
        },
        correct: "a",
      },
      {
        id: 43,
        question: "How to access the private member function of a class?",
        options: {
          a: "Using class address",
          b: "Using object of class",
          c: "Using object pointer",
          d: "Using address of member function",
        },
        correct: "d",
      },
      {
        id: 44,
        question: "Which keyword should be used to declare static variables?",
        options: {
          a: "const",
          b: "common",
          c: "static",
          d: "stat",
        },
        correct: "c",
      },
      {
        id: 45,
        question: "Which is correct syntax for declaring pointer to object?",
        options: {
          a: "*className objectName;",
          b: "className* objectName;",
          c: "className objectName();",
          d: "className objectName;",
        },
        correct: "b",
      },
      {
        id: 46,
        question:
          "Which class/set of classes can illustrate polymorphism in the following C++ code?\nabstract class student\n{\npublic: int marks;\ncalc_grade();\n}\nclass topper: public student\n{\npublic: calc_grade()\n{\nreturn 10;\n}\n};\nclass average:public student\n{\npublic: calc_grade()\n{\nreturn 20;\n}\n};\nclass failed{ int marks; };",
        options: {
          a: "Only class student and topper together can show polymorphism",
          b: "Only class student can show polymorphism",
          c: "Class failed should also inherit class student for this code to work for polymorphism",
          d: "All class student, topper and average together can show polymorphism",
        },
        correct: "d",
      },
      {
        id: 47,
        question:
          "If data members are private, what can we do to access them from the class object?",
        options: {
          a: "Private data members can never be accessed from outside the class",
          b: "Create public member functions to access those data members",
          c: "Create private member functions to access those data members",
          d: "Create protected member functions to access those data members",
        },
        correct: "b",
      },
      {
        id: 48,
        question:
          "Which among the following is not a necessary condition for constructors?",
        options: {
          a: "Its name must be same as that of class",
          b: "It must not have any return type",
          c: "It must contain a definition body",
          d: "It can contain arguments",
        },
        correct: "c",
      },
      {
        id: 49,
        question: "Object being passed to a copy constructor",
        options: {
          a: "Must not be mentioned in parameter list",
          b: "Must be passed with integer type",
          c: "Must be passed by value",
          d: "Must be passed by reference",
        },
        correct: "d",
      },
      {
        id: 50,
        question:
          "If in multiple inheritance, class C inherits class B, and Class B inherits class A. In which sequence are their destructors called if an object of class C was declared?",
        options: {
          a: "~A() then ~B() then ~C()",
          b: "~C() then ~A() then ~B()",
          c: "~C() then ~B() then ~A()",
          d: "~B() then ~C() then ~A()",
        },
        correct: "c",
      },
      {
        id: 51,
        question: "Instance of which type of class can't be created?",
        options: {
          a: "Parent class",
          b: "Abstract class",
          c: "Anonymous class",
          d: "Nested class",
        },
        correct: "b",
      },
      {
        id: 52,
        question: "_______ underlines the feature of Polymorphism in a class.",
        options: {
          a: "Virtual Function",
          b: "Inline function",
          c: "Enclosing class",
          d: "Nested class",
        },
        correct: "a",
      },
      {
        id: 53,
        question:
          "Which feature in OOP is used to allocate additional functions to a predefined operator in any language?",
        options: {
          a: "Function Overloading",
          b: "Function Overriding",
          c: "Operator Overloading",
          d: "Operator Overriding",
        },
        correct: "c",
      },
      {
        id: 54,
        question: "Which feature can be implemented using encapsulation?",
        options: {
          a: "Polymorphism",
          b: "Overloading",
          c: "Inheritance",
          d: "Abstraction",
        },
        correct: "d",
      },
    ],
  },
  exam12: {
    title: "Object-Oriented Programming (OOP) - Extended Comprehensive Exam",
    cat: "OOP",
    questions: [
      {
        id: 1,
        question:
          "Which of the following language was developed as the first purely object programming language?",
        options: {
          a: "SmallTalk",
          b: "C++",
          c: "Kotlin",
          d: "Java",
        },
        correct: "a",
      },
      {
        id: 2,
        question: "Who developed object-oriented programming?",
        options: {
          a: "Adele Goldberg",
          b: "Dennis Ritchie",
          c: "Alan Kay",
          d: "Andrea Ferro",
        },
        correct: "c",
      },
      {
        id: 3,
        question: "Which of the following is not an OOPS concept?",
        options: {
          a: "Encapsulation",
          b: "Polymorphism",
          c: "Exception",
          d: "Abstraction",
        },
        correct: "c",
      },
      {
        id: 4,
        question: "Which feature of OOPS described the reusability of code?",
        options: {
          a: "Abstraction",
          b: "Encapsulation",
          c: "Polymorphism",
          d: "Inheritance",
        },
        correct: "d",
      },
      {
        id: 5,
        question:
          "Which of the following language supports polymorphism but not the classes?",
        options: {
          a: "C++ programming language",
          b: "Java programming language",
          c: "Ada programming language",
          d: "C# programming language",
        },
        correct: "c",
      },
      {
        id: 6,
        question:
          "Which among the following feature is not in the general definition of OOPS?",
        options: {
          a: "Modularity",
          b: "Efficient Code",
          c: "Code reusability",
          d: "Duplicate or Redundant Data",
        },
        correct: "d",
      },
      {
        id: 7,
        question: "Which feature of OOPS derives the class from another class?",
        options: {
          a: "Inheritance",
          b: "Data hiding",
          c: "Encapsulation",
          d: "Polymorphism",
        },
        correct: "a",
      },
      {
        id: 8,
        question:
          "Define the programming language, which does not support all four types of inheritance?",
        options: {
          a: "Smalltalk",
          b: "Kotlin",
          c: "Java",
          d: "C++",
        },
        correct: "c",
      },
      {
        id: 9,
        question: "A single program of OOPS contains classes?",
        options: {
          a: "Only 1",
          b: "Only 999",
          c: "Only 100",
          d: "Any number",
        },
        correct: "d",
      },
      {
        id: 10,
        question:
          "Which operator from the following can be used to illustrate the feature of polymorphism?",
        options: {
          a: "Overloading << of",
          b: "Overloading &&",
          c: "Overloading ||",
          d: "Overloading +=",
        },
        correct: "a",
      },
      {
        id: 11,
        question:
          "Which two features of object-oriented programming are the same?",
        options: {
          a: "Abstraction and Polymorphism features are the same",
          b: "Inheritance and Encapsulation features are the same",
          c: "Encapsulation and Polymorphism features are the same",
          d: "Encapsulation and Abstraction",
        },
        correct: "d",
      },
      {
        id: 12,
        question:
          "Which header file is required by the C++ programming language to use the OOPS concept?",
        options: {
          a: "stdio.h",
          b: "iostream.h",
          c: "stdlib.h",
          d: "We can easily use the OOPS concepts in c++ programs without using any header file",
        },
        correct: "d",
      },
      {
        id: 13,
        question:
          "Which of the following definition is incorrect for polymorphism?",
        options: {
          a: "Polymorphism helps in redefining the same functionality",
          b: "Polymorphism concept is the feature of object-oriented programming (OOP)",
          c: "It always increases the overhead of function definition",
          d: "Ease in the readability of the program",
        },
        correct: "c",
      },
      {
        id: 14,
        question:
          "Which among the following cannot be used for the concept of polymorphism?",
        options: {
          a: "Static member function",
          b: "Constructor Overloading",
          c: "Member function overloading",
          d: "Global member function",
        },
        correct: "a",
      },
      {
        id: 15,
        question:
          "Which function best describe the concept of polymorphism in programming languages?",
        options: {
          a: "Class member function",
          b: "Virtual function",
          c: "Inline function",
          d: "Undefined function",
        },
        correct: "b",
      },
      {
        id: 16,
        question:
          "Which member function is assumed to call first when there is a case of using function overloading or abstract class?",
        options: {
          a: "Global function",
          b: "Local function",
          c: "Function with lowest priority",
          d: "Function with the highest priority",
        },
        correct: "d",
      },
      {
        id: 17,
        question:
          "Is it true to use polymorphism in the C programming language?",
        options: {
          a: "True",
          b: "False",
          c: "Only with structures",
          d: "Only with pointers",
        },
        correct: "a",
      },
      {
        id: 18,
        question:
          "Which of the following language uses the classes but not the polymorphism concept?",
        options: {
          a: "Procedure Oriented language",
          b: "Object-based language",
          c: "Class-based language",
          d: "If classes are used, then the polymorphism concept will always be used in the programming languages",
        },
        correct: "b",
      },
      {
        id: 19,
        question:
          "Which of the following OOP concept is not true for the C++ programming language?",
        options: {
          a: "A class must have member functions",
          b: "C++ Program can be easily written without the use of classes",
          c: "At least one instance should be declared within the C++ program",
          d: "C++ Program must contain at least one class",
        },
        correct: "d",
      },
      {
        id: 20,
        question:
          "What is the extra feature in classes which was not in the structures?",
        options: {
          a: "Member functions",
          b: "Data members",
          c: "Public access specifier",
          d: "Static Data allowed",
        },
        correct: "a",
      },
      {
        id: 21,
        question:
          "How many types of polymorphism in the C++ programming language?",
        options: {
          a: "Three types of polymorphism",
          b: "Two types of polymorphism",
          c: "Five types of polymorphism",
          d: "Four types of polymorphism",
        },
        correct: "b",
      },
      {
        id: 22,
        question:
          "Which of the following feature is also known as run-time binding or late binding?",
        options: {
          a: "Dynamic typing",
          b: "Dynamic loading",
          c: "Dynamic binding",
          d: "Data hiding",
        },
        correct: "c",
      },
      {
        id: 23,
        question: "Which among the following is not a member of the class?",
        options: {
          a: "Virtual function",
          b: "const function",
          c: "Static function",
          d: "Friend function",
        },
        correct: "d",
      },
      {
        id: 24,
        question: "Which of the following class is known as the generic class?",
        options: {
          a: "Final class",
          b: "Template class",
          c: "Abstract class",
          d: "Efficient code",
        },
        correct: "b",
      },
      {
        id: 25,
        question: "Which operator overloads using the friend function?",
        options: {
          a: "*",
          b: "()",
          c: "->",
          d: "=",
        },
        correct: "a",
      },
      {
        id: 26,
        question:
          "Which of the following OOP concept binds the code and data together and keeps them secure from the outside world?",
        options: {
          a: "Polymorphism",
          b: "Inheritance",
          c: "Abstraction",
          d: "Encapsulation",
        },
        correct: "d",
      },
      {
        id: 27,
        question:
          "Which member of the superclass is never accessible to the subclass?",
        options: {
          a: "Public member",
          b: "Protected member",
          c: "Private member",
          d: "All of the mentioned",
        },
        correct: "c",
      },
      {
        id: 28,
        question: "What is the size of a class?",
        options: {
          a: "Sum of the size of all inherited variables along with the variables of the same class",
          b: "The size of the class is the largest size of the variable of the same class",
          c: "Classes in the programming languages do not have any size",
          d: "Sum of the size of all the variables within a class",
        },
        correct: "a",
      },
      {
        id: 29,
        question: "Which class cannot create its instance?",
        options: {
          a: "Parent class",
          b: "Nested class",
          c: "Anonymous class",
          d: "Abstract class",
        },
        correct: "d",
      },
      {
        id: 30,
        question:
          "Encapsulation adds the function in a user-defined structure.",
        options: {
          a: "True",
          b: "False",
          c: "Only in C++",
          d: "Only in Java",
        },
        correct: "b",
      },
      {
        id: 31,
        question:
          "Which of the following variable violates the definition of encapsulation?",
        options: {
          a: "Array variables",
          b: "Local variables",
          c: "Global variables",
          d: "Public variables",
        },
        correct: "c",
      },
      {
        id: 32,
        question:
          "How can the concept of encapsulation be achieved in the program?",
        options: {
          a: "By using the Access specifiers",
          b: "By using the concept of Abstraction",
          c: "By using only private members",
          d: "By using the concept of Inheritance",
        },
        correct: "a",
      },
      {
        id: 33,
        question:
          "The concept of encapsulation helps in writing which type of classes in the Java programming language?",
        options: {
          a: "Abstract classes",
          b: "Wrapper classes",
          c: "Mutable classes",
          d: "Immutable classes",
        },
        correct: "d",
      },
      {
        id: 34,
        question: "Encapsulation is?",
        options: {
          a: "technique of combining more than one member functions into a single unit",
          b: "mechanism of combining more than one data member into a single unit",
          c: "mechanism of combining more than one data members and member functions that implement on those data members into a single unit",
          d: "technique of combining more than one data members and member functions into a single unit, which can manipulate any data",
        },
        correct: "c",
      },
      {
        id: 35,
        question: "Which of the following statement of a program is not right?",
        options: {
          a: "class teacher{}; teacher s[5];",
          b: "class teacher{}s;",
          c: "class teacher{}; teacher s;",
          d: "class teacher{}s[];",
        },
        correct: "d",
      },
      {
        id: 36,
        question:
          "Which of the following syntax is incorrect for the class definition?",
        options: {
          a: "student class{}",
          b: "class student{ student(int a){}}:",
          c: "class teacher{ public: teacher(int a){} }",
          d: "None of the mentioned",
        },
        correct: "a",
      },
      {
        id: 37,
        question: "The object cannot be ?",
        options: {
          a: "passed by copy",
          b: "passed as function",
          c: "passed by value",
          d: "passed by reference",
        },
        correct: "b",
      },
      {
        id: 38,
        question:
          "Which among the following feature does not come under the concept of OOPS?",
        options: {
          a: "Data binding",
          b: "Data hiding",
          c: "Platform independent",
          d: "Message passing",
        },
        correct: "c",
      },
      {
        id: 39,
        question:
          "Which of the following feature may be breaked if the user does not use the classes in the code?",
        options: {
          a: "Object must be used violated",
          b: "Only the encapsulation concept is violated",
          c: "Inheritance cannot be implemented",
          d: "Basically, all the features of OOPS get violated",
        },
        correct: "d",
      },
      {
        id: 40,
        question:
          "Which of the following feature interacts one object with another object?",
        options: {
          a: "Message reading",
          b: "Message passing",
          c: "Data transfer",
          d: "Data binding",
        },
        correct: "b",
      },
      {
        id: 41,
        question: "Which definition best defines the concept of abstraction?",
        options: {
          a: "Hides the important data",
          b: "Hides the implementation and showing only the features",
          c: "Hiding the implementation",
          d: "Showing the important data",
        },
        correct: "b",
      },
      {
        id: 42,
        question:
          "The combination of abstraction of the data and code is viewed in_",
        options: {
          a: "Inheritance",
          b: "Object",
          c: "Class",
          d: "Interfaces",
        },
        correct: "c",
      },
      {
        id: 43,
        question: "The principle of abstraction",
        options: {
          a: "is used to achieve OOPS",
          b: "is used to avoid duplication",
          c: "Use abstraction at its minimum",
          d: "is used to remove longer codes",
        },
        correct: "a",
      },
      {
        id: 44,
        question:
          "Which among the following concept is correct if a user using the concept of encapsulation in a code?",
        options: {
          a: "The modification of the code can be additional overhead",
          b: "Member functions can be used for modifying the data type of data members",
          c: "The data type of data member cannot be modified",
          d: "The data type of the data member can be easily modified without modifying any other code",
        },
        correct: "d",
      },
      {
        id: 45,
        question: "Using the concept of encapsulation security of the data is",
        options: {
          a: "Ensured to some extent",
          b: "Purely ensured",
          c: "Not ensured",
          d: "Very low",
        },
        correct: "a",
      },
      {
        id: 46,
        question:
          "Consider the following Java program and select the right option from the given options.\nclass marksofstudent\n{\nint subjectmarks;\npublic: int* fun()\n{\nreturn &subjectmarks;\n}\n};\nmain()\n{\nmarksofstudent s;\nint *ptr = c.fun();\nreturn 0;\n}",
        options: {
          a: "The above program violates the feature of encapsulation",
          b: "The above program may result in undesirable conditions",
          c: "The above program will generate an error",
          d: "The above program is good to go",
        },
        correct: "a",
      },
      {
        id: 47,
        question:
          "The name of the default access specifier for the member functions or data members in the C++ programming language is",
        options: {
          a: "Private access specifier",
          b: "Public access specifier",
          c: "Protected access specifier",
          d: "Depends on compiler",
        },
        correct: "a",
      },
      {
        id: 48,
        question:
          "Which of the following option best illustrates a friend class?",
        options: {
          a: "This class can access and manipulate all the private members of that class which connects to friend",
          b: "Friend class can only access and manipulate the protected data members of that class that connects to a friend",
          c: "Friend class can't access any data member of another class but can use its methods",
          d: "Friend class don't have any implementation",
        },
        correct: "a",
      },
      {
        id: 49,
        question:
          "Which of the following definition best describes the concept of polymorphism?",
        options: {
          a: "It is the ability to process the many messages and data in one way",
          b: "It is the ability to process the undefined messages or data in at least one way",
          c: "It is the ability to process the message or data in more than one form",
          d: "It is the ability to process the message or data in only one form",
        },
        correct: "c",
      },
      {
        id: 50,
        question:
          "Which class/ or set of classes can describe the concept of polymorphism in the following code?\nabstract class student_details\n{\npublic: int marksofstudent;\ncalculate_grade();\n}\nclass topper:public student_details\n{\npublic: calculate_grade()\n{\nreturn 15;\n}\n};\nclass average:public student_details\n{\npublic: calculate_grade()\n{\nreturn 30;\n}\n};\nclass failed{ int marksofstudent; };",
        options: {
          a: "Only the student_details class can show the concept of polymorphism",
          b: "The class which is 'failed' should also inherit class student for this code to work for polymorphism",
          c: "The student_details, topper and average classes together can show the concept of polymorphism",
          d: "Only the student_details and topper class together can show the concept of polymorphism",
        },
        correct: "c",
      },
    ],
  },

  exam13: {
    title:
      "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
      cat: "Technical Mock Exam",
    questions: [
      {
        id: 1,
        question:
          "What is the output of the following C++ code snippet involving pointers?\n```cpp\nint x = 10;\nint* p = &x;\nint** q = &p;\n**q = 20;\ncout << x;\n```",
        options: {
          a: "10",
          b: "20",
          c: "Address of x",
          d: "Compilation error",
        },
        correct: "b",
      },
      {
        id: 2,
        question:
          "Trace the function calls in this recursive C++ code and determine the output.\n```cpp\nvoid func(int n) {\n  if (n <= 0) return;\n  cout << n << ' ';\n  func(n-2);\n  cout << n << ' ';\n}\nint main() { func(4); }\n```",
        options: {
          a: "4 2 4",
          b: "4 2 0 2 4",
          c: "4 2 2 4",
          d: "4 3 2 1 1 2 3 4",
        },
        correct: "c",
      },
      {
        id: 3,
        question:
          "What does this C++ code output, considering references?\n```cpp\nint a = 5;\nint& b = a;\nb++;\ncout << a;\n```",
        options: {
          a: "5",
          b: "6",
          c: "Undefined behavior",
          d: "Compilation error",
        },
        correct: "b",
      },
      {
        id: 4,
        question:
          'Evaluate the loop in this C code and find the final value of i.\n```cpp\nint i = 0;\nwhile (i < 5) {\n  i++;\n  if (i % 2 == 0) continue;\n  printf("%d ", i);\n}\nprintf("%d", i);\n```',
        options: {
          a: "5",
          b: "1355",
          c: "1 3 5 5",
          d: "0 1 2 3 4 5",
        },
        correct: "c",
      },
      {
        id: 5,
        question:
          "Determine the result based on operator precedence in C++.\n```cpp\nint x = 10 * 5 + 3 / 2 - 1;\ncout << x;\n```",
        options: {
          a: "50",
          b: "51",
          c: "49",
          d: "25",
        },
        correct: "c",
      },
      {
        id: 6,
        question:
          "Trace the function calls and output in this C++ code.\n```cpp\nint func(int& x) { return ++x; }\nint main() {\n  int a = 1;\n  cout << func(a) << a;\n}\n```",
        options: {
          a: "11",
          b: "22",
          c: "12",
          d: "21",
        },
        correct: "b",
      },
      {
        id: 7,
        question: "What is the purpose of the '::' operator in C++?",
        options: {
          a: "Member access for pointers",
          b: "Scope resolution",
          c: "Ternary conditional",
          d: "Dereference",
        },
        correct: "b",
      },
      {
        id: 8,
        question: "Explain the use of the 'friend' keyword in C++ classes.",
        options: {
          a: "Makes a class inherit from another",
          b: "Allows a function or class to access private members",
          c: "Prevents copying of objects",
          d: "Marks a variable as changeable in const objects",
        },
        correct: "b",
      },
      {
        id: 9,
        question:
          "What is the difference in default access specifier between 'struct' and 'class' in C++?",
        options: {
          a: "struct: private, class: public",
          b: "struct: public, class: private",
          c: "Both public",
          d: "Both private",
        },
        correct: "b",
      },
      {
        id: 10,
        question:
          "Is this C++ declaration valid? 'const volatile int* const p;'",
        options: {
          a: "Invalid, conflicting qualifiers",
          b: "Valid, pointer to const volatile int, pointer itself const",
          c: "Invalid, volatile not allowed with const",
          d: "Valid, but pointer is volatile",
        },
        correct: "b",
      },
      {
        id: 11,
        question: "What does the syntax 'operator+' indicate in a C++ class?",
        options: {
          a: "Scope resolution for +",
          b: "Overloading the + operator",
          c: "Unary + operator",
          d: "Preprocessor directive",
        },
        correct: "b",
      },
      {
        id: 12,
        question:
          "Where must preprocessor directives like #define be placed in C++ code?",
        options: {
          a: "Inside functions only",
          b: "Anywhere, but before use",
          c: "At the top of the file, before any code",
          d: "After includes, before main",
        },
        correct: "c",
      },
      {
        id: 13,
        question:
          "Calculate the output of this pseudocode loop.\nPseudocode:\nSET sum = 0\nFOR i FROM 1 TO 5\n  IF i MOD 2 == 0 THEN\n    sum = sum + i\n  ELSE\n    sum = sum - i\n  END IF\nEND FOR\nDISPLAY sum",
        options: {
          a: "3",
          b: "-3",
          c: "0",
          d: "15",
        },
        correct: "b",
      },
      {
        id: 14,
        question:
          "Determine the result after executing this conditional pseudocode.\nPseudocode:\nSET x = 10\nIF x > 5 AND x < 15 THEN\n  x = x * 2\nELSE IF x >= 15 THEN\n  x = x / 2\nELSE\n  x = 0\nEND IF\nDISPLAY x",
        options: {
          a: "20",
          b: "5",
          c: "0",
          d: "10",
        },
        correct: "a",
      },
      {
        id: 15,
        question:
          "What is the final value in this nested loop pseudocode?\nPseudocode:\nSET count = 0\nWHILE count < 3\n  FOR j FROM 1 TO 2\n    count = count + j\n  END FOR\nEND WHILE\nDISPLAY count",
        options: {
          a: "6",
          b: "9",
          c: "3",
          d: "0",
        },
        correct: "b",
      },
      {
        id: 16,
        question:
          "In standard flowchart notation, which shape is used for a decision step?",
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
        question: "What does a parallelogram shape represent in a flowchart?",
        options: {
          a: "Start/End",
          b: "Process",
          c: "Decision",
          d: "Input/Output",
        },
        correct: "d",
      },
      {
        id: 18,
        question:
          "Assuming a table 'employees' with columns id, name, salary, dept_id. What is the output of this SQL query?\n```sql\nSELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id HAVING AVG(salary) > 50000;\n```",
        options: {
          a: "All departments with average salary > 50000",
          b: "All employees with salary > 50000",
          c: "Error, no alias for AVG",
          d: "Departments ordered by salary",
        },
        correct: "a",
      },
      {
        id: 19,
        question:
          "Given tables 'orders' (order_id, customer_id) and 'customers' (id, name). What does this join query return?\n```sql\nSELECT name FROM customers LEFT JOIN orders ON customers.id = orders.customer_id WHERE order_id IS NULL;\n```",
        options: {
          a: "Customers with orders",
          b: "Customers without orders",
          c: "All customers",
          d: "All orders",
        },
        correct: "b",
      },
      {
        id: 20,
        question:
          "What is the result of this subquery in SQL?\n```sql\nSELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);\n```",
        options: {
          a: "Products below average price",
          b: "Products above average price",
          c: "All products",
          d: "Error, subquery invalid",
        },
        correct: "b",
      },
      {
        id: 21,
        question:
          "Is this SQL query correct for finding max salary per department?\n```sql\nSELECT dept, MAX(salary) FROM emp GROUP BY dept;\n```",
        options: {
          a: "Yes, correct",
          b: "No, needs HAVING",
          c: "No, GROUP BY invalid",
          d: "No, must use ORDER BY",
        },
        correct: "a",
      },
      {
        id: 22,
        question:
          "Evaluate this tricky WHERE condition.\n```sql\nSELECT * FROM users WHERE age BETWEEN 20 AND 30 AND NOT (status = 'active' OR role = 'admin');\n```",
        options: {
          a: "Users 20-30, inactive non-admins",
          b: "Users 20-30, active or admins",
          c: "All users 20-30",
          d: "Users outside 20-30",
        },
        correct: "a",
      },
      {
        id: 23,
        question:
          "What does this query output?\n```sql\nSELECT COUNT(DISTINCT user_id) FROM logs WHERE date >= '2023-01-01';\n```",
        options: {
          a: "Total logs since date",
          b: "Unique users since date",
          c: "All users",
          d: "Error, no GROUP BY",
        },
        correct: "b",
      },
      {
        id: 24,
        question: "What is the difference between WHERE and HAVING in SQL?",
        options: {
          a: "WHERE for aggregates, HAVING for rows",
          b: "WHERE filters rows before grouping, HAVING after",
          c: "Both same",
          d: "HAVING only for JOINs",
        },
        correct: "b",
      },
      {
        id: 25,
        question: "In SQL transactions, what does COMMIT do?",
        options: {
          a: "Undoes changes",
          b: "Saves changes permanently",
          c: "Starts a transaction",
          d: "Locks the table",
        },
        correct: "b",
      },
      {
        id: 26,
        question: "Classify: ALTER TABLE is which type of SQL command?",
        options: {
          a: "DML",
          b: "DDL",
          c: "DCL",
          d: "TCL",
        },
        correct: "b",
      },
      {
        id: 27,
        question: "What is the primary purpose of indexing in databases?",
        options: {
          a: "To enforce uniqueness",
          b: "To speed up data retrieval",
          c: "To store data",
          d: "To join tables",
        },
        correct: "b",
      },
      {
        id: 28,
        question: "For query optimization, why avoid SELECT *?",
        options: {
          a: "Returns too few rows",
          b: "Inefficient, fetches unnecessary data",
          c: "Syntax error",
          d: "Only for aggregates",
        },
        correct: "b",
      },
      {
        id: 29,
        question: "What does ROLLBACK do in transactions?",
        options: {
          a: "Commits changes",
          b: "Undoes changes since last commit",
          c: "Starts new transaction",
          d: "Locks rows",
        },
        correct: "b",
      },
      {
        id: 30,
        question:
          'What is the rendered output of this HTML/CSS code?\n```html\n<div class="box">Text</div>\n```\n```css\n.box { width: 100px; height: 100px; background: red; }\n@media (max-width: 600px) { .box { background: blue; } }\n``` Assuming viewport width 500px.',
        options: {
          a: "Red box",
          b: "Blue box",
          c: "No box",
          d: "Green box",
        },
        correct: "b",
      },
      {
        id: 31,
        question:
          'Resolve the specificity conflict in this CSS.\n```css\n#id { color: red; }\n.class { color: blue; }\ndiv { color: green; }\n``` For <div id="id" class="class">Text</div>',
        options: {
          a: "Red",
          b: "Blue",
          c: "Green",
          d: "Black",
        },
        correct: "a",
      },
      {
        id: 32,
        question:
          'What is the output of this HTML code?\n```html\n<p>Before <span style="display: none;">Hidden</span> After</p>\n```',
        options: {
          a: "Before Hidden After",
          b: "Before After",
          c: "Hidden",
          d: "Error",
        },
        correct: "b",
      },
      {
        id: 33,
        question:
          "What is the purpose of semantic tags like <article> in HTML?",
        options: {
          a: "Styling only",
          b: "Improve accessibility and SEO",
          c: "Scripting",
          d: "Form validation",
        },
        correct: "b",
      },
      {
        id: 34,
        question: "In CSS, what determines selector precedence?",
        options: {
          a: "Order in file",
          b: "Specificity rules (ID > class > element)",
          c: "Alphabetical",
          d: "Random",
        },
        correct: "b",
      },
      {
        id: 35,
        question:
          'In this C++ code, what is the order of constructor calls?\n```cpp\nclass Base { public: Base() { cout << "Base"; } };\nclass Derived : public Base { public: Derived() { cout << "Derived"; } };\nDerived d;\n```',
        options: {
          a: "DerivedBase",
          b: "BaseDerived",
          c: "Derived",
          d: "Base",
        },
        correct: "b",
      },
      {
        id: 36,
        question:
          'Trace the virtual function call in C++.\n```cpp\nclass A { public: virtual void f() { cout << "A"; } };\nclass B : public A { public: void f() { cout << "B"; } };\nA* p = new B();\np->f();\n```',
        options: {
          a: "A",
          b: "B",
          c: "AB",
          d: "Compilation error",
        },
        correct: "b",
      },
      {
        id: 37,
        question:
          'What happens in this method overriding code?\n```cpp\nclass Parent { public: void show() { cout << "Parent"; } };\nclass Child : public Parent { public: void show() { cout << "Child"; } };\nParent* ptr = new Child();\nptr->show();\n```',
        options: {
          a: "Child",
          b: "Parent",
          c: "Error",
          d: "ParentChild",
        },
        correct: "b",
      },
      {
        id: 38,
        question:
          'In multiple inheritance, what is the output?\n```cpp\nclass A { public: A() { cout << "A"; } };\nclass B { public: B() { cout << "B"; } };\nclass C : public A, public B { public: C() { cout << "C"; } };\nC obj;\n```',
        options: {
          a: "ABC",
          b: "CAB",
          c: "CBA",
          d: "ACB",
        },
        correct: "a",
      },
      {
        id: 39,
        question: "What is encapsulation in OOP?",
        options: {
          a: "Hiding internal details, exposing interface",
          b: "Reusing code through classes",
          c: "Multiple forms of objects",
          d: "Hiding base class",
        },
        correct: "a",
      },
      {
        id: 40,
        question: "Define polymorphism in OOP.",
        options: {
          a: "Data hiding",
          b: "Ability to take multiple forms",
          c: "Class relationships",
          d: "Abstract classes",
        },
        correct: "b",
      },
      {
        id: 41,
        question: "What is abstraction in OOP?",
        options: {
          a: "Showing only essential features",
          b: "Inheriting properties",
          c: "Overloading methods",
          d: "Multiple inheritance",
        },
        correct: "a",
      },
      {
        id: 42,
        question: "In OOP, what is a 'has-a' relationship?",
        options: {
          a: "Inheritance",
          b: "Composition",
          c: "Polymorphism",
          d: "Encapsulation",
        },
        correct: "b",
      },
      {
        id: 43,
        question: "What is the time complexity of Quick Sort in average case?",
        options: {
          a: "O(n^2)",
          b: "O(n log n)",
          c: "O(n)",
          d: "O(log n)",
        },
        correct: "b",
      },
      {
        id: 44,
        question:
          "Which sorting algorithm is stable: Bubble Sort or Selection Sort?",
        options: {
          a: "Both stable",
          b: "Bubble stable, Selection not",
          c: "Selection stable, Bubble not",
          d: "Both not stable",
        },
        correct: "b",
      },
      {
        id: 45,
        question:
          "For searching in a sorted array, which is better: Binary or Linear Search?",
        options: {
          a: "Linear, O(n)",
          b: "Binary, O(log n)",
          c: "Same",
          d: "Depends on size",
        },
        correct: "b",
      },
      {
        id: 46,
        question: "Identify the algorithm: Divide array, sort halves, merge.",
        options: {
          a: "Quick Sort",
          b: "Merge Sort",
          c: "Insertion Sort",
          d: "Bubble Sort",
        },
        correct: "b",
      },
      {
        id: 47,
        question: "What is the space complexity of DFS?",
        options: {
          a: "O(1)",
          b: "O(n)",
          c: "O(log n)",
          d: "O(n^2)",
        },
        correct: "b",
      },
      {
        id: 48,
        question:
          "Which algorithm for shortest path in weighted graph: BFS or Dijkstra?",
        options: {
          a: "BFS for weighted",
          b: "Dijkstra for weighted",
          c: "Both same",
          d: "DFS",
        },
        correct: "b",
      },
      {
        id: 49,
        question: "Is Insertion Sort adaptive?",
        options: {
          a: "No",
          b: "Yes, better for nearly sorted",
          c: "Only for small n",
          d: "Worse for sorted",
        },
        correct: "b",
      },
      {
        id: 50,
        question:
          "For minimum spanning tree, compare Prim's and Kruskal's: which handles disconnected graphs better?",
        options: {
          a: "Prim's, starts from vertex",
          b: "Kruskal's, can handle disconnected",
          c: "Both same",
          d: "Neither",
        },
        correct: "b",
      },
    ],
  },
  exam14: {
  title: "Technical Mock Exam - Algorithms (Searching, Sorting, Graph & Tree Algorithms)",
  cat: "Algorithms",
  questions: [
    {
      id: 1,
      question: "In a binary search implementation, what is the worst-case time complexity for searching an element in a balanced BST with n nodes?",
      options: {
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)"
      },
      correct: "b"
    },
    {
      id: 2,
      question: "When implementing merge sort, what additional space complexity is required for the merging process?",
      options: {
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n²)"
      },
      correct: "c"
    },
    {
      id: 3,
      question: "Which sorting algorithm would be most efficient for a nearly sorted array of 1 million elements where only a few elements are out of place?",
      options: {
        a: "Bubble Sort",
        b: "Selection Sort",
        c: "Insertion Sort",
        d: "Quick Sort"
      },
      correct: "c"
    },
    {
      id: 4,
      question: "In Dijkstra's algorithm, why can't it handle graphs with negative weight edges?",
      options: {
        a: "It causes infinite loops",
        b: "The greedy approach fails to guarantee optimality",
        c: "Priority queues don't work with negative numbers",
        d: "It violates the triangle inequality"
      },
      correct: "b"
    },
    {
      id: 5,
      question: `Consider this recursive Fibonacci implementation:
      int fib(int n) {
        if (n <= 1) return n;
        return fib(n-1) + fib(n-2);
      }
      What is its time complexity?`,
      options: {
        a: "O(n)",
        b: "O(n log n)",
        c: "O(2^n)",
        d: "O(n²)"
      },
      correct: "c"
    },
    {
      id: 6,
      question: "In a graph represented with an adjacency matrix, what is the time complexity to check if an edge exists between two vertices?",
      options: {
        a: "O(1)",
        b: "O(log V)",
        c: "O(V)",
        d: "O(V²)"
      },
      correct: "a"
    },
    {
      id: 7,
      question: "Which searching algorithm would be most efficient for finding an element in a sorted array that has been rotated at some pivot point?",
      options: {
        a: "Linear Search",
        b: "Binary Search (modified)",
        c: "Jump Search",
        d: "Interpolation Search"
      },
      correct: "b"
    },
    {
      id: 8,
      question: "What is the main advantage of using a priority queue in Prim's algorithm compared to a simple array for edge selection?",
      options: {
        a: "Reduces space complexity",
        b: "Improves time complexity from O(V²) to O(E log V)",
        c: "Makes the algorithm stable",
        d: "Allows negative edge weights"
      },
      correct: "b"
    },
    {
      id: 9,
      question: `Given this bubble sort optimization:
      void bubbleSort(int arr[], int n) {
        bool swapped;
        for (int i = 0; i < n-1; i++) {
          swapped = false;
          for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
              swap(&arr[j], &arr[j+1]);
              swapped = true;
            }
          }
          if (swapped == false) break;
        }
      }
      What improvement does this provide?`,
      options: {
        a: "Reduces best-case time to O(n)",
        b: "Eliminates need for swaps",
        c: "Makes it stable",
        d: "Reduces space complexity"
      },
      correct: "a"
    },
    {
      id: 10,
      question: "In a BFS implementation using an adjacency list, what data structure is essential for proper traversal order?",
      options: {
        a: "Stack",
        b: "Queue",
        c: "Priority Queue",
        d: "Heap"
      },
      correct: "b"
    },
    {
      id: 11,
      question: "Which algorithm would be most suitable for finding the shortest path in an unweighted graph?",
      options: {
        a: "Dijkstra's",
        b: "Bellman-Ford",
        c: "BFS",
        d: "DFS"
      },
      correct: "c"
    },
    {
      id: 12,
      question: "What is the key difference between Prim's and Kruskal's algorithms for finding MST?",
      options: {
        a: "Prim's works on directed graphs",
        b: "Prim's grows a single tree while Kruskal's merges multiple trees",
        c: "Kruskal's can't handle negative weights",
        d: "Prim's has better time complexity"
      },
      correct: "b"
    },
    {
      id: 13,
      question: "In quick sort, what is the worst-case scenario that leads to O(n²) time complexity?",
      options: {
        a: "When the array is already sorted",
        b: "When all elements are equal",
        c: "When the pivot is always the median",
        d: "Both a and b"
      },
      correct: "d"
    },
    {
      id: 14,
      question: "Which searching algorithm is most efficient for finding an element in a uniformly distributed, sorted array?",
      options: {
        a: "Binary Search",
        b: "Linear Search",
        c: "Interpolation Search",
        d: "Jump Search"
      },
      correct: "c"
    },
    {
      id: 15,
      question: "What is the space complexity of the recursive implementation of DFS on a graph with V vertices and E edges?",
      options: {
        a: "O(1)",
        b: "O(V)",
        c: "O(E)",
        d: "O(V + E)"
      },
      correct: "b"
    },
    {
      id: 16,
      question: "Which sorting algorithm maintains the relative order of equal elements (is stable)?",
      options: {
        a: "Selection Sort",
        b: "Quick Sort",
        c: "Merge Sort",
        d: "Heap Sort"
      },
      correct: "c"
    },
    {
      id: 17,
      question: "In a hash table with chaining, what is the worst-case time complexity for searching an element?",
      options: {
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)"
      },
      correct: "c"
    },
    {
      id: 18,
      question: "What is the key advantage of using an adjacency list over an adjacency matrix for sparse graphs?",
      options: {
        a: "Faster edge existence checks",
        b: "More space efficient",
        c: "Better cache locality",
        d: "Simpler implementation"
      },
      correct: "b"
    },
    {
      id: 19,
      question: "Which algorithm would be most efficient for finding all pairs shortest paths in a graph with negative weight edges?",
      options: {
        a: "Dijkstra's",
        b: "Bellman-Ford",
        c: "Floyd-Warshall",
        d: "Prim's"
      },
      correct: "c"
    },
    {
      id: 20,
      question: "In a max-heap, where is the second largest element guaranteed to be located?",
      options: {
        a: "Root's left child",
        b: "Root's right child",
        c: "Either left or right child of root",
        d: "In the last level"
      },
      correct: "c"
    },
    {
      id: 21,
      question: "What is the time complexity of building a heap from an unsorted array?",
      options: {
        a: "O(n)",
        b: "O(n log n)",
        c: "O(log n)",
        d: "O(n²)"
      },
      correct: "a"
    },
    {
      id: 22,
      question: "Which graph algorithm uses the concept of relaxation?",
      options: {
        a: "DFS",
        b: "BFS",
        c: "Dijkstra's",
        d: "Prim's"
      },
      correct: "c"
    },
    {
      id: 23,
      question: "What is the main advantage of randomized quick sort over standard quick sort?",
      options: {
        a: "Guaranteed O(n log n) time",
        b: "Lower constant factors",
        c: "Avoids worst-case O(n²) scenarios with high probability",
        d: "Uses less memory"
      },
      correct: "c"
    },
    {
      id: 24,
      question: "In a B-tree of order m, what is the maximum number of children a node can have?",
      options: {
        a: "m",
        b: "m-1",
        c: "2m",
        d: "m/2"
      },
      correct: "a"
    },
    {
      id: 25,
      question: "Which sorting algorithm works by repeatedly selecting the smallest element from the unsorted portion and swapping it with the first unsorted element?",
      options: {
        a: "Bubble Sort",
        b: "Insertion Sort",
        c: "Selection Sort",
        d: "Quick Sort"
      },
      correct: "c"
    },
    {
      id: 26,
      question: "What is the key invariant in a red-black tree?",
      options: {
        a: "No two red nodes can be adjacent",
        b: "Every path from root to leaf has the same number of black nodes",
        c: "The tree is always perfectly balanced",
        d: "All leaves must be red"
      },
      correct: "b"
    },
    {
      id: 27,
      question: "Which algorithm is most efficient for detecting cycles in a directed graph?",
      options: {
        a: "BFS",
        b: "DFS",
        c: "Dijkstra's",
        d: "Kruskal's"
      },
      correct: "b"
    },
    {
      id: 28,
      question: "In a hash table using open addressing, what happens when a collision occurs?",
      options: {
        a: "Elements are stored in a linked list",
        b: "A new hash function is used",
        c: "The element is placed in the next available slot",
        d: "The table size is doubled"
      },
      correct: "c"
    },
    {
      id: 29,
      question: "What is the time complexity of the Floyd-Warshall algorithm for all pairs shortest paths?",
      options: {
        a: "O(V)",
        b: "O(V log V)",
        c: "O(V²)",
        d: "O(V³)"
      },
      correct: "d"
    },
    {
      id: 30,
      question: "Which data structure is most efficient for implementing a priority queue in Dijkstra's algorithm?",
      options: {
        a: "Array",
        b: "Linked List",
        c: "Binary Heap",
        d: "Hash Table"
      },
      correct: "c"
    },
    {
      id: 31,
      question: "In a binary search tree, what is the worst-case time complexity for finding the predecessor of a node?",
      options: {
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)"
      },
      correct: "b"
    },
    {
      id: 32,
      question: "What is the main advantage of counting sort over comparison-based sorts?",
      options: {
        a: "Works well with negative numbers",
        b: "Can sort in O(n) time for small integer ranges",
        c: "Is stable",
        d: "Uses minimal space"
      },
      correct: "b"
    },
    {
      id: 33,
      question: "Which graph representation would be most space-efficient for a complete graph?",
      options: {
        a: "Adjacency List",
        b: "Adjacency Matrix",
        c: "Edge List",
        d: "Incidence Matrix"
      },
      correct: "b"
    },
    {
      id: 34,
      question: "What is the key property that distinguishes a min-heap from a max-heap?",
      options: {
        a: "Parent nodes are smaller than children in min-heap",
        b: "Min-heap uses arrays while max-heap uses trees",
        c: "Max-heap has better time complexity",
        d: "Min-heap can't have duplicate values"
      },
      correct: "a"
    },
    {
      id: 35,
      question: "In a graph with V vertices and E edges, what is the time complexity of Kruskal's algorithm using union-find with path compression?",
      options: {
        a: "O(V log V)",
        b: "O(E log V)",
        c: "O(V²)",
        d: "O(E + V)"
      },
      correct: "b"
    },
    {
      id: 36,
      question: "Which sorting algorithm is most cache-efficient for large datasets?",
      options: {
        a: "Quick Sort",
        b: "Merge Sort",
        c: "Heap Sort",
        d: "Bubble Sort"
      },
      correct: "a"
    },
    {
      id: 37,
      question: "What is the main disadvantage of using an adjacency matrix for sparse graphs?",
      options: {
        a: "Slow edge existence checks",
        b: "High space complexity (O(V²))",
        c: "Can't represent directed graphs",
        d: "Difficult to implement"
      },
      correct: "b"
    },
    {
      id: 38,
      question: "In a B+ tree, where are all the data records stored?",
      options: {
        a: "In internal nodes",
        b: "In leaf nodes",
        c: "Evenly distributed throughout the tree",
        d: "In the root node"
      },
      correct: "b"
    },
    {
      id: 39,
      question: "Which algorithm is guaranteed to find the shortest path in a graph with negative weight edges (though may not detect negative cycles)?",
      options: {
        a: "Dijkstra's",
        b: "Bellman-Ford",
        c: "Floyd-Warshall",
        d: "Prim's"
      },
      correct: "b"
    },
    {
      id: 40,
      question: "What is the time complexity of the Sieve of Eratosthenes algorithm for finding all primes up to n?",
      options: {
        a: "O(n)",
        b: "O(n log log n)",
        c: "O(n²)",
        d: "O(n log n)"
      },
      correct: "b"
    },
    {
      id: 41,
      question: "Which data structure would be most efficient for implementing an LRU cache?",
      options: {
        a: "Singly Linked List",
        b: "Doubly Linked List + Hash Map",
        c: "Binary Search Tree",
        d: "Stack"
      },
      correct: "b"
    },
    {
      id: 42,
      question: "In AVL trees, what is the maximum allowed difference in heights between left and right subtrees of any node?",
      options: {
        a: "0",
        b: "1",
        c: "2",
        d: "log n"
      },
      correct: "b"
    },
    {
      id: 43,
      question: "Which algorithm uses three nested loops to compute all pairs shortest paths?",
      options: {
        a: "Dijkstra's",
        b: "Bellman-Ford",
        c: "Floyd-Warshall",
        d: "Kruskal's"
      },
      correct: "c"
    },
    {
      id: 44,
      question: "What is the main advantage of radix sort over comparison-based sorts?",
      options: {
        a: "Can sort in linear time for fixed-length keys",
        b: "Works well with floating-point numbers",
        c: "Is stable",
        d: "Uses minimal space"
      },
      correct: "a"
    },
    {
      id: 45,
      question: "In a trie data structure, what is the time complexity for searching a word of length L?",
      options: {
        a: "O(1)",
        b: "O(L)",
        c: "O(log L)",
        d: "O(n)"
      },
      correct: "b"
    },
    {
      id: 46,
      question: "Which algorithm would be most efficient for finding strongly connected components in a directed graph?",
      options: {
        a: "Kruskal's",
        b: "Kosaraju's",
        c: "Prim's",
        d: "Dijkstra's"
      },
      correct: "b"
    },
    {
      id: 47,
      question: "What is the key advantage of a skip list over a balanced binary search tree?",
      options: {
        a: "Simpler implementation",
        b: "Better worst-case time complexity",
        c: "Uses less space",
        d: "Supports range queries more efficiently"
      },
      correct: "a"
    },
    {
      id: 48,
      question: "In the context of dynamic programming, what does memoization refer to?",
      options: {
        a: "Breaking problems into subproblems",
        b: "Storing results of expensive function calls",
        c: "Using tables to store intermediate results",
        d: "Iterative bottom-up approach"
      },
      correct: "b"
    },
    {
      id: 49,
      question: "Which algorithm is most efficient for finding the median of an unsorted array?",
      options: {
        a: "Quickselect",
        b: "Quicksort",
        c: "Mergesort",
        d: "Heapsort"
      },
      correct: "a"
    },
    {
      id: 50,
      question: "What is the key property of a stable sorting algorithm?",
      options: {
        a: "Maintains relative order of equal elements",
        b: "Has O(n log n) time complexity",
        c: "Uses constant extra space",
        d: "Works in-place"
      },
      correct: "a"
    }
  ]
},

exam15 : {
  title: "Technical Mock Exam 7 - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
  cat: "Technical Mock Exam",
  questions: [
    { id: 1, question: "Which OOP feature restricts direct access to class data?", options: {a: "Inheritance", b: "Encapsulation", c: "Polymorphism", d: "Abstraction"}, correct: "b" },
    { id: 2, question: "Which sorting algorithm is stable and uses divide-and-conquer?", options: {a: "Merge Sort", b: "Quick Sort", c: "Heap Sort", d: "Selection Sort"}, correct: "a" },
    { id: 3, question: "Which statement about indexes is TRUE?", options: {a: "They always slow down queries", b: "They speed up data retrieval but slow inserts/updates", c: "They are required for all columns", d: "They replace primary keys"}, correct: "b" },
    { id: 4, question: "What is method overriding?", options: {a: "Same method name in derived class with same signature as base", b: "Different method name in derived class", c: "Method defined only in base class", d: "Method defined in base class as static"}, correct: "a" },
    { id: 5, question: "Which flowchart symbol is used to represent Input/Output?", options: {a: "Diamond", b: "Rectangle", c: "Parallelogram", d: "Oval"}, correct: "c" },
    { id: 6, question: "Which C++ keyword prevents implicit conversion for constructors?", options: {a: "mutable", b: "explicit", c: "volatile", d: "friend"}, correct: "b" },
    { id: 7, question: "What will this code output?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A { public: virtual void f(){ cout<<\"A\"; } };\nclass B: public A { public: void f(){ cout<<\"B\"; } };\nint main() { A *ptr = new B(); ptr->f(); }\n```", options: {a: "A", b: "B", c: "Error", d: "Undefined"}, correct: "b" },
    { id: 8, question: "Which SQL command is used to undo transactions?", options: {a: "COMMIT", b: "ROLLBACK", c: "SAVEPOINT", d: "UPDATE"}, correct: "b" },
    { id: 9, question: "What does the following code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint x = 5;\ncout << ((x > 3) ? x : 0);\n```", options: {a: "0", b: "3", c: "5", d: "Error"}, correct: "c" },
    { id: 10, question: "In pseudocode, what is the final value of x?\n``` \nx = 2\nwhile x < 10\n    x = x * 2\nendwhile\n```", options: {a: "8", b: "10", c: "16", d: "Error"}, correct: "c" },
    { id: 11, question: "Which algorithm traverses a graph layer by layer?", options: {a: "DFS", b: "BFS", c: "Dijkstra", d: "Prim"}, correct: "b" },
    { id: 12, question: "What is printed by this snippet?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A { public: virtual void f(){ cout<<\"A\"; } };\nclass B: public A { public: void f(){ cout<<\"B\"; } };\nint main(){ A a; B b; a = b; a.f(); }\n```", options: {a: "A", b: "B", c: "Compiler Error", d: "Undefined Behavior"}, correct: "a" },
    { id: 13, question: "Which C++ keyword is used to allow a class function to access private members of another class?", options: {a: "virtual", b: "friend", c: "explicit", d: "mutable"}, correct: "b" },
    { id: 14, question: "What will be the color of the paragraph in the following code?\n```html\n<p style=\"color: blue; color: red;\">Hello</p>\n```", options: {a: "Blue", b: "Red", c: "Black", d: "Error"}, correct: "b" },
    { id: 15, question: "Time complexity of DFS traversal in a graph with V vertices and E edges is:", options: {a: "O(V+E)", b: "O(V*E)", c: "O(E^2)", d: "O(V^2)"}, correct: "a" },
    { id: 16, question: "Which flowchart shape is used for Start/End?", options: {a: "Rectangle", b: "Diamond", c: "Oval", d: "Parallelogram"}, correct: "c" },
    { id: 17, question: "Which of the following represents \"is-a\" relationship in OOP?", options: {a: "Composition", b: "Aggregation", c: "Inheritance", d: "Association"}, correct: "c" },
    { id: 18, question: "Which SQL query returns employees without department?", options: {a: "SELECT * FROM employees LEFT JOIN departments ON employees.dept_id = departments.id WHERE departments.id IS NULL;", b: "SELECT * FROM employees JOIN departments;", c: "SELECT * FROM employees WHERE dept_id IS NOT NULL;", d: "SELECT * FROM employees RIGHT JOIN departments;"}, correct: "a" },
    { id: 19, question: "Which SQL statement creates a new table?", options: {a: "INSERT", b: "CREATE TABLE", c: "SELECT", d: "UPDATE"}, correct: "b" },
    { id: 20, question: "Multiple inheritance allows a class to inherit from:", options: {a: "One class only", b: "Multiple classes", c: "Interfaces only", d: "None"}, correct: "b" },
    { id: 21, question: "Time complexity of binary search in a sorted array is:", options: {a: "O(n)", b: "O(log n)", c: "O(n^2)", d: "O(1)"}, correct: "b" },
    { id: 22, question: "Which SQL object allows you to save a reusable query result?", options: {a: "Trigger", b: "View", c: "Stored Procedure", d: "Cursor"}, correct: "b" },
    { id: 23, question: "Which OOP concept allows different classes to define methods with the same name but different behavior?", options: {a: "Encapsulation", b: "Inheritance", c: "Polymorphism", d: "Abstraction"}, correct: "c" },
    { id: 24, question: "Which keyword prevents implicit conversion in C++ constructors?", options: {a: "mutable", b: "explicit", c: "volatile", d: "friend"}, correct: "b" },
    { id: 25, question: "Which SQL feature is used to enforce business logic automatically?", options: {a: "Stored procedure", b: "Trigger", c: "View", d: "Index"}, correct: "b" },
    { id: 26, question: "What is the output order of constructors?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A { public: A(){cout<<\"A\";} };\nclass B: public A { public: B(){cout<<\"B\";} };\nint main() { B b; }\n```", options: {a: "B then A", b: "A then B", c: "ABAB", d: "Compiler error"}, correct: "b" },
    { id: 27, question: "Which algorithm guarantees shortest path in weighted graphs with non-negative edges?", options: {a: "DFS", b: "BFS", c: "Dijkstra", d: "Prim"}, correct: "c" },
    { id: 28, question: "What is the output of the following C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nvoid swap(int &a, int &b) { int t = a; a = b; b = t; }\nint main() {\n    int x = 5, y = 10;\n    swap(x, y);\n    cout << x << \" \" << y;\n    return 0;\n}\n```", options: {a: "5 10", b: "10 5", c: "0 0", d: "Compiler Error"}, correct: "b" },
    { id: 29, question: "Which algorithm is best described as \"always chooses the locally optimal solution\"?", options: {a: "Dynamic Programming", b: "Greedy", c: "Divide and Conquer", d: "Backtracking"}, correct: "b" },
    { id: 30, question: "Which HTML5 semantic tag is used to define navigation links?", options: {a: "<nav>", b: "<header>", c: "<section>", d: "<article>"}, correct: "a" },
    { id: 31, question: "In pseudocode, what does this loop compute?\n``` \nsum = 0\nfor i = 1 to 5\n    sum = sum + i\nendfor\n```", options: {a: "Sum of numbers from 0 to 5", b: "Sum of numbers from 1 to 5", c: "Product of numbers from 1 to 5", d: "Always 0"}, correct: "b" },
    { id: 32, question: "What is the output of the following C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    cout << factorial(4);\n}\n```", options: {a: "10", b: "24", c: "16", d: "Error"}, correct: "b" },
    { id: 33, question: "Which C++ operator is used to access a member function or variable through a pointer to an object?", options: {a: ".", b: "->", c: "::", d: "*"}, correct: "b" },
    { id: 34, question: "Which C++ statement about references is TRUE?", options: {a: "References can be reseated to another object", b: "References must be initialized when declared", c: "References can be null", d: "References can change type at runtime"}, correct: "b" },
    { id: 35, question: "Which selector has the highest specificity?\n```css\np { color: blue; }\n#id1 { color: red; }\n.class1 { color: green; }\n```", options: {a: "p", b: ".class1", c: "#id1", d: "All same"}, correct: "c" },
    { id: 36, question: "Which C++ keyword allows a member function to access private members of another class?", options: {a: "virtual", b: "friend", c: "explicit", d: "mutable"}, correct: "b" },
    { id: 37, question: "What is the difference between struct and class in C++?", options: {a: "struct members are public by default, class members are private by default", b: "struct cannot have functions, class can", c: "class cannot have constructors, struct can", d: "No difference"}, correct: "a" },
    { id: 38, question: "Where should preprocessor directives like #define be placed?", options: {a: "Inside functions only", b: "Before use, usually at top of file", c: "After main function", d: "Anywhere, it does not matter"}, correct: "b" },
    { id: 39, question: "Which clause is used to filter grouped data in SQL?", options: {a: "WHERE", b: "HAVING", c: "ORDER BY", d: "GROUP BY"}, correct: "b" },
    { id: 40, question: "Pseudocode calculates factorial recursively. What is returned by factorial(3)?", options: {a: "3", b: "6", c: "9", d: "Error"}, correct: "b" },
    { id: 41, question: "Which SQL query uses INNER JOIN to select employees and their department names?", options: {a: "SELECT e.name, d.name FROM employees e JOIN departments d ON e.dept_id = d.id;", b: "SELECT e.name, d.name FROM employees e, departments d;", c: "SELECT * FROM employees LEFT JOIN departments;", d: "SELECT e.name FROM employees;"}, correct: "a" },
    { id: 42, question: "What is the output of:\n```sql\nSELECT * FROM employees WHERE name LIKE 'A%';\n```", options: {a: "Employees with names starting with A", b: "Employees with names containing A anywhere", c: "Employees with names ending with A", d: "All employees"}, correct: "a" },
    { id: 43, question: "Which OOP concept hides implementation details and exposes only necessary interfaces?", options: {a: "Encapsulation", b: "Polymorphism", c: "Inheritance", d: "Abstraction"}, correct: "d" },
    { id: 44, question: "Which SQL type is INSERT?", options: {a: "DDL", b: "DML", c: "DCL", d: "TCL"}, correct: "b" },
    { id: 45, question: "What does the sizeof operator return in C++?", options: {a: "The size of variable in bytes", b: "The value of the variable", c: "The memory address", d: "Compiler version"}, correct: "a" },
    { id: 46, question: "Which SQL query returns max salary per department?\n```sql\nSELECT dept, MAX(salary) FROM employees GROUP BY dept;\n```", options: {a: "Max salary in company", b: "Max salary per department", c: "All salaries", d: "Sum of salaries per department"}, correct: "b" },
    { id: 47, question: "Which CSS feature allows adjusting layout based on screen size?", options: {a: "Media Queries", b: "Flexbox", c: "Grid", d: "Pseudo-classes"}, correct: "a" },
    { id: 48, question: "What is the output of the following pseudocode?\n``` \nx = 2\nwhile x < 10\n    x = x * 2\nendwhile\n```", options: {a: "8", b: "10", c: "16", d: "Error"}, correct: "c" },
    { id: 49, question: "Which of the following is NOT a greedy algorithm?", options: {a: "Prim's MST", b: "Kruskal's MST", c: "Dijkstra", d: "Merge Sort"}, correct: "d" },
    { id: 50, question: "What will be the rendered output?\n```html\n<div><p>Hello</p></div>\n<style>div > p { color: red; }</style>\n```", options: {a: "Hello in red", b: "Hello in default color", c: "Error", d: "Hello hidden"}, correct: "a" }
  ]
},

exam16: {
  title: "Technical Mock Exam  - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
  cat: "Technical Mock Exam",
  questions: [
    {
      id: 1,
      question: "What does the `.*` operator do in C++?",
      options: {
        a: "Pointer to member dereference",
        b: "Multiplication with pointer arithmetic",
        c: "Bitwise AND followed by multiplication",
        d: "Exponentiation operator"
      },
      correct: "a"
    },
    {
      id: 2,
      question: "What will be the output of the following SQL query?\n```sql\nSELECT COUNT(*) FROM (\n  SELECT 1 AS num UNION SELECT 2 UNION SELECT 2\n) t GROUP BY num HAVING COUNT(num) > 1;\n```",
      options: {
        a: "0",
        b: "1",
        c: "2",
        d: "3"
      },
      correct: "b"
    },
    {
      id: 3,
      question: "In C++, what is the order of constructor calls for this inheritance: `class D : public B, virtual public C { ... };` when creating an instance of D?",
      options: {
        a: "B, C, D",
        b: "C, B, D",
        c: "D, B, C",
        d: "B, D, C"
      },
      correct: "b"
    },
    {
      id: 4,
      question: "Which CSS selector has the highest specificity?",
      options: {
        a: "div#main .sidebar:hover",
        b: "#main > .sidebar",
        c: "div.sidebar a[href]",
        d: "style attribute"
      },
      correct: "d"
    },
    {
      id: 5,
      question: "What is the time complexity of Dijkstra's algorithm using a Fibonacci heap?",
      options: {
        a: "O(V^2)",
        b: "O(E + V log V)",
        c: "O(E log V)",
        d: "O(V log E)"
      },
      correct: "b"
    },
    {
      id: 6,
      question: "What does this C++ code output?\n```cpp\n#include <iostream>\nint main() {\n  int x = 5;\n  int &y = x;\n  int *z = &y;\n  *z = 10;\n  std::cout << x;\n  return 0;\n}\n```",
      options: {
        a: "5",
        b: "10",
        c: "Memory address",
        d: "Compilation error"
      },
      correct: "b"
    },
    {
      id: 7,
      question: "Which flowchart symbol represents a decision point?",
      options: {
        a: "Rectangle",
        b: "Diamond",
        c: "Oval",
        d: "Parallelogram"
      },
      correct: "b"
    },
    {
      id: 8,
      question: "What is the output of this pseudocode?\n```\na = 5\nb = 10\nif a > b then\n  a = a - b\nelse if b > a then\n  b = b - a\nend if\nprint a + b\n```",
      options: {
        a: "5",
        b: "10",
        c: "15",
        d: "0"
      },
      correct: "a"
    },
    {
      id: 9,
      question: "In SQL, what is the difference between WHERE and HAVING clauses?",
      options: {
        a: "WHERE filters rows before grouping, HAVING filters after",
        b: "HAVING is used only with JOINs",
        c: "WHERE can't use aggregate functions",
        d: "Both a and c"
      },
      correct: "d"
    },
    {
      id: 10,
      question: "Which HTML5 element should be used for the main content of a document?",
      options: {
        a: "<div class=\"main\">",
        b: "<main>",
        c: "<section>",
        d: "<content>"
      },
      correct: "b"
    },
    {
      id: 11,
      question: "What is the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\n\nint foo(int &x) { return x *= 2; }\nint bar(int x) { return x += 3; }\n\nint main() {\n  int x = 5;\n  cout << foo(x) << bar(x);\n  return 0;\n}\n```",
      options: {
        a: "1013",
        b: "108",
        c: "1310",
        d: "810"
      },
      correct: "a"
    },
    {
      id: 12,
      question: "Which SQL operation would be most efficient to find all employees who have no assigned projects?",
      options: {
        a: "LEFT JOIN with IS NULL check",
        b: "NOT IN subquery",
        c: "NOT EXISTS subquery",
        d: "All are equally efficient"
      },
      correct: "a"
    },
    {
      id: 13,
      question: "What is the primary purpose of the virtual keyword in C++?",
      options: {
        a: "To prevent function overriding",
        b: "To enable dynamic polymorphism",
        c: "To improve performance",
        d: "To make functions inline"
      },
      correct: "b"
    },
    {
      id: 14,
      question: "Which algorithm uses a divide-and-conquer approach?",
      options: {
        a: "Bubble Sort",
        b: "Merge Sort",
        c: "Insertion Sort",
        d: "Selection Sort"
      },
      correct: "b"
    },
    {
      id: 15,
      question: "What does this CSS code output?\n```css\ndiv { width: 300px; padding: 20px; border: 10px solid; box-sizing: border-box; }\n```",
      options: {
        a: "Total width 300px (content 240px)",
        b: "Total width 360px (content 300px)",
        c: "Total width 300px (content 300px)",
        d: "Total width 340px (content 300px)"
      },
      correct: "c"
    },
    {
      id: 16,
      question: "What is the output of this recursive C++ function when called as f(5)?\n```cpp\nint f(int n) {\n  return (n <= 1) ? 1 : n * f(n - 2);\n}\n```",
      options: {
        a: "15",
        b: "120",
        c: "30",
        d: "Stack overflow"
      },
      correct: "a"
    },
    {
      id: 17,
      question: "Which SQL statement creates a transaction that will roll back if any error occurs?",
      options: {
        a: "BEGIN TRANSACTION; ... COMMIT;",
        b: "BEGIN TRY ... COMMIT END TRY BEGIN CATCH ... ROLLBACK END CATCH",
        c: "SET XACT_ABORT ON; BEGIN TRANSACTION; ... COMMIT;",
        d: "Both b and c"
      },
      correct: "d"
    },
    {
      id: 18,
      question: "In OOP, what principle is violated when a class has too many responsibilities?",
      options: {
        a: "Encapsulation",
        b: "Single Responsibility Principle",
        c: "Open/Closed Principle",
        d: "Liskov Substitution Principle"
      },
      correct: "b"
    },
    {
      id: 19,
      question: "Which C++ operator cannot be overloaded?",
      options: {
        a: ":: (scope resolution)",
        b: "+ (addition)",
        c: "= (assignment)",
        d: "[] (subscript)"
      },
      correct: "a"
    },
    {
      id: 20,
      question: "What is the output of this SQL query?\n```sql\nWITH RECURSIVE seq(n) AS (\n  SELECT 1 UNION ALL SELECT n+1 FROM seq WHERE n < 5\n) SELECT SUM(n) FROM seq;\n```",
      options: {
        a: "5",
        b: "10",
        c: "15",
        d: "21"
      },
      correct: "c"
    },
    {
      id: 21,
      question: "Which HTML attribute is essential for screen readers to understand table relationships?",
      options: {
        a: "alt",
        b: "headers",
        c: "summary",
        d: "Both b and c"
      },
      correct: "d"
    },
    {
      id: 22,
      question: "What is the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\n\n#define SQUARE(x) x * x\n\nint main() {\n  cout << SQUARE(2 + 3);\n  return 0;\n}\n```",
      options: {
        a: "25",
        b: "11",
        c: "Compilation error",
        d: "Undefined behavior"
      },
      correct: "b"
    },
    {
      id: 23,
      question: "Which sorting algorithm is both stable and O(n log n) in the worst case?",
      options: {
        a: "QuickSort",
        b: "HeapSort",
        c: "MergeSort",
        d: "InsertionSort"
      },
      correct: "c"
    },
    {
      id: 24,
      question: "What does this SQL query return?\n```sql\nSELECT CASE WHEN NULL = NULL THEN 'True' ELSE 'False' END;\n```",
      options: {
        a: "True",
        b: "False",
        c: "NULL",
        d: "Error"
      },
      correct: "b"
    },
    {
      id: 25,
      question: "Which CSS property enables Flexbox layout?",
      options: {
        a: "display: flex-container;",
        b: "display: flex;",
        c: "display: flexbox;",
        d: "layout: flex;"
      },
      correct: "b"
    },
    {
      id: 26,
      question: "In C++, what is the difference between `struct` and `class`?",
      options: {
        a: "struct members are public by default, class are private",
        b: "struct can't have methods",
        c: "class supports inheritance, struct doesn't",
        d: "No difference"
      },
      correct: "a"
    },
    {
      id: 27,
      question: "What does this pseudocode output?\n```\nfunction f(n)\n  if n <= 1 then return 1\n  else return n + f(n-1) + f(n-2)\nend\nprint f(4)\n```",
      options: {
        a: "9",
        b: "12",
        c: "14",
        d: "17"
      },
      correct: "b"
    },
    {
      id: 28,
      question: "Which SQL index type is most efficient for full-text search?",
      options: {
        a: "B-tree",
        b: "Hash",
        c: "Bitmap",
        d: "Inverted"
      },
      correct: "d"
    },
    {
      id: 29,
      question: "What is the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n  virtual void show() { cout << \"Base\"; }\n};\n\nclass Derived : public Base {\npublic:\n  void show() override { cout << \"Derived\"; }\n};\n\nint main() {\n  Base* b = new Derived();\n  b->show();\n  delete b;\n  return 0;\n}\n```",
      options: {
        a: "Base",
        b: "Derived",
        c: "Compilation error",
        d: "Runtime error"
      },
      correct: "b"
    },
    {
      id: 30,
      question: "Which algorithm is guaranteed to find the shortest path in a weighted graph with negative edges but no negative cycles?",
      options: {
        a: "Dijkstra's",
        b: "Bellman-Ford",
        c: "A*",
        d: "Floyd-Warshall"
      },
      correct: "b"
    },
    {
      id: 31,
      question: "What does this SQL query return?\n```sql\nSELECT 1/2 FROM dual WHERE 1=0 UNION ALL SELECT 3/4 FROM dual;\n```",
      options: {
        a: "0.5",
        b: "0.75",
        c: "No rows",
        d: "0.5 and 0.75"
      },
      correct: "b"
    },
    {
      id: 32,
      question: "Which C++ operator has the highest precedence?",
      options: {
        a: "==",
        b: "=",
        c: "::",
        d: "&&"
      },
      correct: "c"
    },
    {
      id: 33,
      question: "What is the purpose of the CSS `will-change` property?",
      options: {
        a: "To animate property changes",
        b: "To optimize performance by hinting at future changes",
        c: "To force layout recalculation",
        d: "To override important declarations"
      },
      correct: "b"
    },
    {
      id: 34,
      question: "Which OOP concept is demonstrated by method overriding?",
      options: {
        a: "Encapsulation",
        b: "Abstraction",
        c: "Polymorphism",
        d: "Inheritance"
      },
      correct: "c"
    },
    {
      id: 35,
      question: "What is the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int a[] = {1,2,3};\n  int *p = a + 1;\n  cout << p[-1] << *p << p[1];\n  return 0;\n}\n```",
      options: {
        a: "123",
        b: "223",
        c: "Undefined behavior",
        d: "Compilation error"
      },
      correct: "a"
    },
    {
      id: 36,
      question: "Which SQL statement creates a view that updates when its base tables change?",
      options: {
        a: "CREATE MATERIALIZED VIEW",
        b: "CREATE VIEW",
        c: "CREATE LIVE VIEW",
        d: "CREATE DYNAMIC VIEW"
      },
      correct: "b"
    },
    {
      id: 37,
      question: "What does this flowchart symbol represent? ⬢",
      options: {
        a: "Start/End",
        b: "Process",
        c: "Decision",
        d: "Input/Output"
      },
      correct: "d"
    },
    {
      id: 38,
      question: "Which HTML element provides machine-readable metadata about the document?",
      options: {
        a: "<meta>",
        b: "<data>",
        c: "<script type=\"application/ld+json\">",
        d: "All of the above"
      },
      correct: "d"
    },
    {
      id: 39,
      question: "What is the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 0;\n  cout << (x++ + ++x) << x;\n  return 0;\n}\n```",
      options: {
        a: "2 2",
        b: "1 2",
        c: "3 2",
        d: "Undefined behavior"
      },
      correct: "a"
    },
    {
      id: 40,
      question: "Which SQL window function returns a rank with gaps?",
      options: {
        a: "ROW_NUMBER()",
        b: "RANK()",
        c: "DENSE_RANK()",
        d: "NTILE()"
      },
      correct: "b"
    },
    {
      id: 41,
      question: "Which algorithm would be most efficient to find the shortest path in an unweighted graph?",
      options: {
        a: "Dijkstra's",
        b: "A*",
        c: "BFS",
        d: "DFS"
      },
      correct: "c"
    },
    {
      id: 42,
      question: "What does this CSS code do?\n```css\n@media (hover: hover) {\n  button:hover { background: blue; }\n}\n```",
      options: {
        a: "Applies hover only on touch devices",
        b: "Applies hover only when device supports hovering",
        c: "Forces hover state on all devices",
        d: "Disables hover effects"
      },
      correct: "b"
    },
    {
      id: 43,
      question: "What is the output of this SQL query?\n```sql\nSELECT COALESCE(NULLIF(NULL, NULL), 'Hello');\n```",
      options: {
        a: "NULL",
        b: "Hello",
        c: "Empty string",
        d: "Error"
      },
      correct: "b"
    },
    {
      id: 44,
      question: "Which C++ storage class preserves variable value between function calls?",
      options: {
        a: "auto",
        b: "register",
        c: "static",
        d: "extern"
      },
      correct: "c"
    },
    {
      id: 45,
      question: "What is the main advantage of a stored procedure over inline SQL?",
      options: {
        a: "Better performance due to precompilation",
        b: "Reduced network traffic",
        c: "Improved security through parameterization",
        d: "All of the above"
      },
      correct: "d"
    },
    {
      id: 46,
      question: "Which algorithm is NOT typically used for weighted graph shortest path problems?",
      options: {
        a: "Prim's",
        b: "Dijkstra's",
        c: "Bellman-Ford",
        d: "Floyd-Warshall"
      },
      correct: "a"
    },
    {
      id: 47,
      question: "What does this C++ code output?\n```cpp\n#include <iostream>\nusing namespace std;\n\nnamespace A { int x = 1; }\nnamespace B { int x = 2; }\n\nusing namespace A;\nusing namespace B;\n\nint main() {\n  cout << A::x << B::x;\n  return 0;\n}\n```",
      options: {
        a: "12",
        b: "Compilation error",
        c: "11",
        d: "22"
      },
      correct: "a"
    },
    {
      id: 48,
      question: "Which HTML element is most semantic for a standalone piece of content that could be syndicated?",
      options: {
        a: "<div class=\"article\">",
        b: "<section>",
        c: "<article>",
        d: "<content>"
      },
      correct: "c"
    },
    {
      id: 49,
      question: "What is the output of this pseudocode?\n```\nx = [1,2,3,4]\nfor i from 0 to length(x)-1\n  x[i] = x[length(x)-1-i]\nend\nprint x\n```",
      options: {
        a: "[1,2,3,4]",
        b: "[4,3,2,1]",
        c: "[4,3,3,4]",
        d: "[4,4,4,4]"
      },
      correct: "c"
    },
    {
      id: 50,
      question: "Which CSS Grid property defines the size of implicit grid tracks?",
      options: {
        a: "grid-auto-rows",
        b: "grid-template-rows",
        c: "grid-row-gap",
        d: "grid-implicit"
      },
      correct: "a"
    }
  ]
},

};

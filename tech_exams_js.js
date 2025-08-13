const technicalExams = {

  exam1 : {
  title: "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
  questions: [
    // ----------------- C/C++ (12 questions) -----------------
    // --- Code-based (6) ---
    {
      id: 1,
      question: "What will be the output of the following code?\n```cpp\n#include <iostream>\nusing namespace std;\nvoid func(int &x) { x += 5; }\nint main() {\n    int a = 3;\n    func(a);\n    cout << a;\n}\n```",
      options: { a: "3", b: "5", c: "8", d: "Compilation Error" },
      correct: "c"
    },
    {
      id: 2,
      question: "Given the code:\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int *p = arr + 2;\n    cout << *(p - 1);\n}\n``` What is printed?",
      options: { a: "1", b: "2", c: "3", d: "4" },
      correct: "b"
    },
    {
      id: 3,
      question: "Consider:\n```cpp\n#include <iostream>\nusing namespace std;\nint f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 1);\n}\nint main() {\n    cout << f(4);\n}\n``` Output?",
      options: { a: "10", b: "24", c: "120", d: "None of the above" },
      correct: "b"
    },
    {
      id: 4,
      question: "What is the output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int x = 2;\n    cout << x++ * ++x;\n}\n```",
      options: { a: "6", b: "8", c: "9", d: "Undefined Behavior" },
      correct: "d"
    },
    {
      id: 5,
      question: "Given:\n```cpp\n#include <iostream>\nusing namespace std;\nvoid print(int x = 5, int y = 10){ cout << x << \" \" << y; }\nint main(){ print(3); }\n``` Output?",
      options: { a: "3 0", b: "3 10", c: "5 10", d: "Error" },
      correct: "b"
    },
    {
      id: 6,
      question: "What will this print?\n```cpp\n#include <iostream>\nusing namespace std;\nint main(){\n    int x = 1;\n    while (x < 5) x += x++;\n    cout << x;\n}\n```",
      options: { a: "5", b: "6", c: "7", d: "8" },
      correct: "b"
    },

    // --- Theory (6) ---
    {
      id: 7,
      question: "Which of the following is NOT a stage in the compilation process in C++?",
      options: { a: "Lexical Analysis", b: "Linking", c: "Optimization", d: "Garbage Collection" },
      correct: "d"
    },
    {
      id: 8,
      question: "In C++, which storage class has the longest lifetime?",
      options: { a: "auto", b: "register", c: "static", d: "extern" },
      correct: "c"
    },
    {
      id: 9,
      question: "Which correctly describes pass-by-reference?",
      options: { a: "A copy of the value is passed", b: "A reference to the original is passed", c: "A constant value is passed", d: "None of the above" },
      correct: "b"
    },
    {
      id: 10,
      question: "Friend functions in C++:",
      options: { a: "Can access private and protected members", b: "Are inherited by child classes", c: "Can be virtual", d: "Must be member functions" },
      correct: "a"
    },
    {
      id: 11,
      question: "Which memory region stores dynamically allocated variables?",
      options: { a: "Stack", b: "Heap", c: "Code segment", d: "Static segment" },
      correct: "b"
    },
    {
      id: 12,
      question: "Header files in C++:",
      options: { a: "Contain only class definitions", b: "Contain both definitions and implementations", c: "Should be included in other header files", d: "Usually contain declarations" },
      correct: "d"
    },

    // ----------------- Pseudocode & Flowchart Logic (5) -----------------
    {
      id: 13,
      question: "Pseudocode:\n```\ncount ← 0\nfor i ← 1 to 4\n  for j ← 1 to i\n    count ← count + 1\nprint count\n```\nOutput?",
      options: { a: "4", b: "6", c: "8", d: "10" },
      correct: "b"
    },
    {
      id: 14,
      question: "Pseudocode:\n```\nx ← 5\ny ← 0\nwhile x > 0\ny ← y + x\nx ← x - 2\nprint y\n```\nOutput?",
      options: { a: "5", b: "9", c: "12", d: "15" },
      correct: "c"
    },
    {
      id: 15,
      question: "Pseudocode:\n```\nfor i ← 2 to 5\n  if i mod 2 = 0 then\n    print i\n```\nWhat is printed?",
      options: { a: "2 4", b: "2 3 4 5", c: "Even numbers from 2 to 5", d: "Error" },
      correct: "a"
    },
    {
      id: 16,
      question: "A flowchart has a decision diamond with 'x > 5?'. If YES, it goes to 'Print High', else 'Print Low'. What is printed if x = 5?",
      options: { a: "High", b: "Low", c: "Error", d: "Nothing" },
      correct: "b"
    },
    {
      id: 17,
      question: "In a flowchart, a parallelogram represents:",
      options: { a: "Decision", b: "Start/End", c: "Input/Output", d: "Process" },
      correct: "c"
    },

    // ----------------- SQL (12 questions) -----------------
    // Code-based (6)
    {
      id: 18,
      question: "What will be the result?\n```sql\nSELECT COUNT(*) FROM Employees WHERE department = 'HR' AND salary > 50000;\n```",
      options: { a: "Number of HR employees", b: "Number of HR employees with salary > 50000", c: "Sum of salaries", d: "All employees with salary > 50000" },
      correct: "b"
    },
    {
      id: 19,
      question: "Given tables Orders and Customers, which query finds all customers without orders?\n",
      options: { a: "SELECT * FROM Customers c JOIN Orders o ON c.id = o.cid;", b: "SELECT * FROM Customers WHERE id NOT IN (SELECT cid FROM Orders);", c: "SELECT * FROM Customers WHERE id IN Orders;", d: "SELECT * FROM Customers EXCEPT SELECT * FROM Orders;" },
      correct: "b"
    },
    {
      id: 20,
      question: "What is output?\n```sql\nSELECT department, COUNT(*) FROM Employees GROUP BY department HAVING COUNT(*) > 5;\n```",
      options: { a: "Departments with >5 employees", b: "All departments", c: "First 5 employees per department", d: "Error" },
      correct: "a"
    },
    {
      id: 21,
      question: "Given:\n```sql\nSELECT name FROM Employees WHERE salary BETWEEN 40000 AND 60000;\n``` This returns:",
      options: { a: "Employees earning 40000 only", b: "Employees earning exactly 60000", c: "Employees earning between 40000 and 60000 inclusive", d: "None" },
      correct: "c"
    },
    {
      id: 22,
      question: "Which query returns total salary per department sorted by total salary descending?",
      options: { a: "SELECT department, SUM(salary) FROM Employees GROUP BY department ORDER BY SUM(salary) DESC;", b: "SELECT department, salary FROM Employees ORDER BY salary DESC;", c: "SELECT department, AVG(salary) FROM Employees;", d: "SELECT department FROM Employees;" },
      correct: "a"
    },
    {
      id: 23,
      question: "Given:\n```sql\nSELECT * FROM Products WHERE price > ALL (SELECT price FROM Products WHERE category = 'Electronics');\n``` This returns:",
      options: { a: "All products", b: "Products with price higher than every Electronics item", c: "Products cheaper than Electronics", d: "Electronics only" },
      correct: "b"
    },

    // Theory (6)
    {
      id: 24,
      question: "In SQL, `HAVING` is used:",
      options: { a: "To filter before grouping", b: "To filter after grouping", c: "As a replacement for WHERE", d: "For ordering results" },
      correct: "b"
    },
    {
      id: 25,
      question: "Which is DDL?",
      options: { a: "SELECT", b: "INSERT", c: "CREATE", d: "UPDATE" },
      correct: "c"
    },
    {
      id: 26,
      question: "`COMMIT` in SQL means:",
      options: { a: "Save transaction changes", b: "Undo transaction changes", c: "Lock table", d: "Exit database" },
      correct: "a"
    },
    {
      id: 27,
      question: "Indexing improves:",
      options: { a: "Insert speed", b: "Delete speed", c: "Select speed", d: "Data integrity" },
      correct: "c"
    },
    {
      id: 28,
      question: "Which is NOT a transaction property?",
      options: { a: "Atomicity", b: "Consistency", c: "Isolation", d: "Durability", e: "Concurrency" },
      correct: "e"
    },
    {
      id: 29,
      question: "Which statement is true about query optimization?",
      options: { a: "It guarantees faster execution", b: "It may rewrite queries internally", c: "It removes indexes", d: "It only applies to DDL" },
      correct: "b"
    },

    // ----------------- HTML/CSS (5 questions) -----------------
    {
      id: 30,
      question: "What does this render?\n```html\n<p style='color:red'><span style='color:blue'>Text</span></p>\n```",
      options: { a: "Red text", b: "Blue text", c: "Black text", d: "Error" },
      correct: "b"
    },
    {
      id: 31,
      question: "Which media query targets screens under 600px?",
      options: { a: "@media screen and (max-width: 600px)", b: "@media screen and (min-width: 600px)", c: "@media only print", d: "None" },
      correct: "a"
    },
    {
      id: 32,
      question: "Given:\n```css\np { color: blue; }\n#id1 { color: red; }\n<p id='id1'>Hello</p>\n``` What is the text color?",
      options: { a: "Blue", b: "Red", c: "Black", d: "Undefined" },
      correct: "b"
    },
    {
      id: 33,
      question: "Which tag is semantic?",
      options: { a: "<div>", b: "<section>", c: "<span>", d: "<b>" },
      correct: "b"
    },
    {
      id: 34,
      question: "CSS specificity order (highest to lowest):",
      options: { a: "Element < Class < ID", b: "ID < Class < Element", c: "Class < ID < Element", d: "None" },
      correct: "a"
    },

    // ----------------- OOP (8 questions) -----------------
    // Code-based (4)
    {
      id: 35,
      question: "What is printed?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A {\npublic: A(){ cout<<\"A\"; } ~A(){ cout<<\"a\"; }\n};\nclass B: public A {\npublic: B(){ cout<<\"B\"; } ~B(){ cout<<\"b\"; }\n};\nint main(){ B obj; }\n```",
      options: { a: "ABab", b: "BAab", c: "ABba", d: "BAba" },
      correct: "a"
    },
    {
      id: 36,
      question: "Given:\n```cpp\n#include <iostream>\nusing namespace std;\nclass Base { public: virtual void show(){ cout<<\"Base\"; } };\nclass Derived: public Base { public: void show(){ cout<<\"Derived\"; } };\nint main(){ Base *b = new Derived(); b->show(); }\n``` Output?",
      options: { a: "Base", b: "Derived", c: "Error", d: "Undefined" },
      correct: "b"
    },
    {
      id: 37,
      question: "What is output?\n```cpp\n#include <iostream>\nusing namespace std;\nclass A { public: virtual void f(){ cout<<\"A\"; } };\nclass B: public A { public: void f(){ cout<<\"B\"; } };\nint main(){ A a; B b; a = b; a.f(); }\n```",
      options: { a: "A", b: "B", c: "Error", d: "Undefined" },
      correct: "a"
    },
    {
      id: 38,
      question: "Multiple inheritance ambiguity is resolved using:",
      options: { a: "Overloading", b: "Virtual Inheritance", c: "Friend functions", d: "Abstract classes" },
      correct: "b"
    },

    // Theory (4)
    {
      id: 39,
      question: "Encapsulation in OOP means:",
      options: { a: "Combining data and methods", b: "Hiding implementation details", c: "Allowing multiple forms", d: "Inheritance" },
      correct: "b"
    },
    {
      id: 40,
      question: "Polymorphism allows:",
      options: { a: "One name, many forms", b: "One form, many names", c: "Multiple inheritance only", d: "Encapsulation" },
      correct: "a"
    },
    {
      id: 41,
      question: "Abstraction in OOP is:",
      options: { a: "Hiding irrelevant details", b: "Encapsulation", c: "Overloading operators", d: "Overriding functions" },
      correct: "a"
    },
    {
      id: 42,
      question: "A 'has-a' relationship in OOP is:",
      options: { a: "Association", b: "Composition", c: "Inheritance", d: "Polymorphism" },
      correct: "b"
    },

    // ----------------- Algorithms (8 questions) -----------------
    // Theory (4)
    {
      id: 43,
      question: "Which sorting algorithm is stable and has O(n log n) time complexity?",
      options: { a: "QuickSort", b: "MergeSort", c: "HeapSort", d: "SelectionSort" },
      correct: "b"
    },
    {
      id: 44,
      question: "DFS is best used when:",
      options: { a: "Shortest path is needed", b: "Exploring all paths deeply first", c: "Level-order traversal", d: "Finding connected components" },
      correct: "b"
    },
    {
      id: 45,
      question: "Dijkstra's algorithm is:",
      options: { a: "Greedy", b: "Divide and conquer", c: "Dynamic programming", d: "Backtracking" },
      correct: "a"
    },
    {
      id: 46,
      question: "Which is NOT a comparison-based sorting algorithm?",
      options: { a: "QuickSort", b: "MergeSort", c: "CountingSort", d: "HeapSort" },
      correct: "c"
    },

    // Code-based (4)
    {
      id: 47,
      question: "What is output?\n```cpp\n#include <iostream>\n#include <queue>\nusing namespace std;\nint main(){ queue<int> q; q.push(1); q.push(2); q.push(3); q.pop(); cout << q.front(); }\n```",
      options: { a: "1", b: "2", c: "3", d: "Error" },
      correct: "b"
    },
    {
      id: 48,
      question: "Given adjacency list representation, BFS visits nodes in which order for a simple connected graph?",
      options: { a: "Depth-first", b: "Breadth-first", c: "Random", d: "Sorted by value" },
      correct: "b"
    },
    {
      id: 49,
      question: "In QuickSort, the pivot selection affects:",
      options: { a: "Time complexity", b: "Space complexity", c: "Stability", d: "Heap property" },
      correct: "a"
    },
    {
      id: 50,
      question: "Given array [4, 2, 1, 3], one merge sort pass produces:",
      options: { a: "[4,2] [1,3]", b: "[2,4] [1,3]", c: "[1,2,3,4]", d: "[4,3,2,1]" },
      correct: "b"
    }
  ]
},
exam6: {
  title: "Technical Mock Exam - C/C++, SQL, HTML, CSS, OOP, Algorithms (Intermediate to Advanced & Tricky)",
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
        d: "8"
      },
      correct: "b"
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
        d: "24"
      },
      correct: "a"
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
        d: "10 10"
      },
      correct: "b"
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
        d: "80"
      },
      correct: "c"
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
        d: "10"
      },
      correct: "b"
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
        d: "Nothing"
      },
      correct: "c"
    },
    {
      id: 7,
      question: "In C++, what happens when you delete a pointer twice without setting it to nullptr?",
      options: {
        a: "The program continues normally",
        b: "Undefined behavior occurs",
        c: "A compilation error is generated",
        d: "The memory is freed twice safely"
      },
      correct: "b"
    },
    {
      id: 8,
      question: "Which variables have global scope in a C++ program?",
      options: {
        a: "Variables declared inside main() function",
        b: "Variables declared outside all functions",
        c: "Variables declared with static keyword only",
        d: "Variables declared in header files only"
      },
      correct: "b"
    },
    {
      id: 9,
      question: "What is the correct order of C++ compilation stages?",
      options: {
        a: "Preprocessing → Compilation → Assembly → Linking",
        b: "Compilation → Preprocessing → Linking → Assembly", 
        c: "Preprocessing → Assembly → Compilation → Linking",
        d: "Assembly → Preprocessing → Compilation → Linking"
      },
      correct: "a"
    },
    {
      id: 10,
      question: "What is the main difference between header files (.h) and source files (.cpp)?",
      options: {
        a: "Header files contain only function declarations, source files contain definitions",
        b: "Header files are compiled separately from source files",
        c: "Source files cannot include header files",
        d: "Header files are executed at runtime, source files at compile time"
      },
      correct: "a"
    },
    {
      id: 11,
      question: "What is the key difference between pass-by-value and pass-by-reference in C++?",
      options: {
        a: "Pass-by-value is faster than pass-by-reference",
        b: "Pass-by-reference creates a copy, pass-by-value doesn't",
        c: "Pass-by-value creates a copy, pass-by-reference uses the original variable",
        d: "There is no difference in C++"
      },
      correct: "c"
    },
    {
      id: 12,
      question: "What is the primary purpose of friend classes in C++?",
      options: {
        a: "To inherit from multiple base classes",
        b: "To allow access to private and protected members of another class",
        c: "To prevent inheritance from a class",
        d: "To create virtual functions"
      },
      correct: "b"
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
        d: "80"
      },
      correct: "a"
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
        d: "Sum of even numbers up to 20"
      },
      correct: "b"
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
        d: "42"
      },
      correct: "c"
    },
    {
      id: 16,
      question: "In a flowchart, what does a diamond shape typically represent?",
      options: {
        a: "Process or computation",
        b: "Input/Output operation",
        c: "Decision or condition",
        d: "Start or end of algorithm"
      },
      correct: "c"
    },
    {
      id: 17,
      question: "In flowchart logic, if a loop condition is checked at the beginning, it's called:",
      options: {
        a: "Post-test loop",
        b: "Pre-test loop",
        c: "Infinite loop",
        d: "Nested loop"
      },
      correct: "b"
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
        d: "Only customers with no orders"
      },
      correct: "b"
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
        d: "Departments with any employee earning > 50000"
      },
      correct: "b"
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
        d: "Students with the highest grade"
      },
      correct: "b"
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
        d: "Products in each category with their prices"
      },
      correct: "b"
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
        d: "Creates a Cartesian product"
      },
      correct: "b"
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
        d: "Nothing is wrong"
      },
      correct: "b"
    },
    {
      id: 24,
      question: "What is the main difference between WHERE and HAVING clauses in SQL?",
      options: {
        a: "WHERE filters rows before grouping, HAVING filters groups after grouping",
        b: "HAVING is faster than WHERE",
        c: "WHERE is used with aggregate functions, HAVING is not",
        d: "There is no difference"
      },
      correct: "a"
    },
    {
      id: 25,
      question: "In SQL transactions, what does ROLLBACK do?",
      options: {
        a: "Saves all changes permanently",
        b: "Undoes all changes since the last COMMIT",
        c: "Deletes the entire database",
        d: "Creates a backup of the database"
      },
      correct: "b"
    },
    {
      id: 26,
      question: "Which of the following is a DDL (Data Definition Language) command?",
      options: {
        a: "SELECT",
        b: "INSERT",
        c: "UPDATE",
        d: "CREATE"
      },
      correct: "d"
    },
    {
      id: 27,
      question: "What is the primary benefit of database indexing?",
      options: {
        a: "Reduces storage space",
        b: "Improves query performance",
        c: "Prevents data corruption",
        d: "Enables data encryption"
      },
      correct: "b"
    },
    {
      id: 28,
      question: "Which technique is most effective for optimizing slow SELECT queries?",
      options: {
        a: "Adding more columns to SELECT",
        b: "Using DISTINCT on all columns",
        c: "Adding appropriate indexes on WHERE clause columns",
        d: "Using subqueries instead of JOINs"
      },
      correct: "c"
    },
    {
      id: 29,
      question: "When should you use HAVING instead of WHERE in a SQL query?",
      options: {
        a: "When filtering individual rows",
        b: "When using aggregate functions in the condition",
        c: "When joining multiple tables",
        d: "When sorting results"
      },
      correct: "b"
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
        d: "Black (default)"
      },
      correct: "c"
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
        d: "No background"
      },
      correct: "c"
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
        d: "Sidebar always visible with 25% width"
      },
      correct: "c"
    },
    {
      id: 33,
      question: "Which HTML5 semantic tag is most appropriate for a site's main navigation menu?",
      options: {
        a: "<menu>",
        b: "<nav>",
        c: "<navigation>", 
        d: "<header>"
      },
      correct: "b"
    },
    {
      id: 34,
      question: "What is the primary purpose of the 'alt' attribute in HTML img tags?",
      options: {
        a: "To provide a tooltip on hover",
        b: "To specify image dimensions",
        c: "To provide alternative text for screen readers and accessibility",
        d: "To set the image loading priority"
      },
      correct: "c"
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
        d: "Derived Base ~Base ~Derived"
      },
      correct: "b"
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
        d: "Both Animal sound and Woof"
      },
      correct: "b"
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
        d: "Child Parent display"
      },
      correct: "c"
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
        d: "Runtime error"
      },
      correct: "c"
    },
    {
      id: 39,
      question: "What is encapsulation in object-oriented programming?",
      options: {
        a: "Creating multiple objects from one class",
        b: "Hiding internal implementation details and exposing only necessary interfaces",
        c: "Inheriting properties from parent class",
        d: "Using the same interface for different underlying forms"
      },
      correct: "b"
    },
    {
      id: 40,
      question: "Which OOP principle allows a child class to inherit properties and methods from a parent class?",
      options: {
        a: "Encapsulation",
        b: "Polymorphism",
        c: "Inheritance",
        d: "Abstraction"
      },
      correct: "c"
    },
    {
      id: 41,
      question: "What is polymorphism in OOP?",
      options: {
        a: "Having multiple constructors in a class",
        b: "The ability of objects to take multiple forms and respond to the same interface differently",
        c: "Creating private variables in a class",
        d: "Inheriting from multiple base classes"
      },
      correct: "b"
    },
    {
      id: 42,
      question: "What does abstraction mean in object-oriented programming?",
      options: {
        a: "Making all class members private",
        b: "Creating objects from classes",
        c: "Hiding complex implementation details and showing only essential features",
        d: "Using inheritance to extend functionality"
      },
      correct: "c"
    },

    // Algorithms Questions (8 total: 4 theory, 4 code-based)
    {
      id: 43,
      question: "Which algorithm has O(n log n) average time complexity and is based on divide-and-conquer strategy?",
      options: {
        a: "Bubble Sort",
        b: "Selection Sort",
        c: "Quick Sort",
        d: "Insertion Sort"
      },
      correct: "c"
    },
    {
      id: 44,
      question: "What is the key difference between stable and unstable sorting algorithms?",
      options: {
        a: "Stable algorithms are faster than unstable ones",
        b: "Stable algorithms preserve the relative order of equal elements",
        c: "Unstable algorithms use less memory",
        d: "Stable algorithms only work on integers"
      },
      correct: "b"
    },
    {
      id: 45,
      question: "Which algorithm type is Dijkstra's shortest path algorithm classified as?",
      options: {
        a: "Divide and Conquer",
        b: "Dynamic Programming",
        c: "Greedy Algorithm",
        d: "Backtracking"
      },
      correct: "c"
    },
    {
      id: 46,
      question: "When should you use DFS (Depth-First Search) over BFS (Breadth-First Search)?",
      options: {
        a: "When you need the shortest path",
        b: "When memory is limited and you need to explore deep paths",
        c: "When finding all nodes at a specific distance",
        d: "When working with weighted graphs only"
      },
      correct: "b"
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
        d: "A, B, C, F, D, E"
      },
      correct: "a"
    },
    {
      id: 48,
      question: `Using Dijkstra's algorithm, what is the shortest distance from A to D?
Graph weights: A-B(2), A-C(4), B-C(1), B-D(7), C-D(3)`,
      options: {
        a: "6",
        b: "7",
        c: "8",
        d: "9"
      },
      correct: "a"
    },
    {
      id: 49,
      question: `What is the minimum spanning tree weight using Prim's algorithm?
Graph: A-B(1), A-C(3), B-C(2), B-D(4), C-D(5)`,
      options: {
        a: "7",
        b: "8",
        c: "10",
        d: "15"
      },
      correct: "a"
    },
    {
      id: 50,
      question: `Trace QuickSort with pivot as first element. What is the array after first partition?
Initial array: [5, 2, 8, 1, 9, 3]`,
      options: {
        a: "[2, 1, 3, 5, 8, 9]",
        b: "[2, 1, 3, 5, 9, 8]", 
        c: "[1, 2, 3, 5, 8, 9]",
        d: "[3, 2, 1, 5, 8, 9]"
      },
      correct: "a"
    }
  ]
}

}
const technicalExams = {
  exam1: {
    title: "Technical Mock Exam 1 - C/C++, SQL, HTML, CSS, OOP",
    questions: [
      {
        id: 1,
        question: "What is the correct way to declare a pointer to an integer in C++?",
        options: {
          a: "int ptr*;",
          b: "int *ptr;",
          c: "*int ptr;",
          d: "ptr int*;"
        },
        correct: "b"
      },
      {
        id: 2,
        question: "Which HTML tag is used to create a hyperlink?",
        options: {
          a: "<link>",
          b: "<href>",
          c: "<a>",
          d: "<url>"
        },
        correct: "c"
      },
      {
        id: 3,
        question: "In SQL, which clause is used to filter records?",
        options: {
          a: "FILTER",
          b: "WHERE",
          c: "SELECT",
          d: "HAVING"
        },
        correct: "b"
      },
      {
        id: 4,
        question: "What does CSS stand for?",
        options: {
          a: "Computer Style Sheets",
          b: "Creative Style Sheets",
          c: "Cascading Style Sheets",
          d: "Colorful Style Sheets"
        },
        correct: "c"
      },
      {
        id: 5,
        question: "Which of the following is NOT a principle of OOP?",
        options: {
          a: "Encapsulation",
          b: "Inheritance",
          c: "Compilation",
          d: "Polymorphism"
        },
        correct: "c"
      },
      {
        id: 6,
        question: "What will be the output of the following C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << ++x << \" \" << x++ << endl;\n    return 0;\n}\n```",
        options: {
          a: "6 5",
          b: "6 6",
          c: "5 6",
          d: "7 6"
        },
        correct: "b"
      },
      {
        id: 7,
        question: "Which CSS property is used to change the text color?",
        options: {
          a: "font-color",
          b: "text-color",
          c: "color",
          d: "foreground-color"
        },
        correct: "c"
      },
      {
        id: 8,
        question: "What is the correct SQL syntax to select all columns from a table named \"users\"?",
        options: {
          a: "SELECT * FROM users;",
          b: "SELECT ALL FROM users;",
          c: "GET * FROM users;",
          d: "FETCH * FROM users;"
        },
        correct: "a"
      },
      {
        id: 9,
        question: "In OOP, what is encapsulation?",
        options: {
          a: "Creating multiple objects",
          b: "Hiding internal implementation details",
          c: "Inheriting from parent class",
          d: "Overloading methods"
        },
        correct: "b"
      },
      {
        id: 10,
        question: "Which HTML attribute specifies the URL of the page the link goes to?",
        options: {
          a: "src",
          b: "href",
          c: "link",
          d: "url"
        },
        correct: "b"
      },
      {
        id: 11,
        question: "What is the size of an int in C++ (typically on 32-bit systems)?",
        options: {
          a: "2 bytes",
          b: "4 bytes",
          c: "8 bytes",
          d: "16 bytes"
        },
        correct: "b"
      },
      {
        id: 12,
        question: "Which SQL command is used to add new records to a table?",
        options: {
          a: "ADD",
          b: "INSERT",
          c: "CREATE",
          d: "APPEND"
        },
        correct: "b"
      },
      {
        id: 13,
        question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[2]);\n    return 0;\n}\n```",
        options: {
          a: "2",
          b: "3",
          c: "4",
          d: "Error"
        },
        correct: "b"
      },
      {
        id: 14,
        question: "Which CSS property is used to make text bold?",
        options: {
          a: "text-weight",
          b: "font-weight",
          c: "text-bold",
          d: "font-bold"
        },
        correct: "b"
      },
      {
        id: 15,
        question: "In HTML, which tag is used to define an unordered list?",
        options: {
          a: "<ol>",
          b: "<ul>",
          c: "<li>",
          d: "<list>"
        },
        correct: "b"
      },
      {
        id: 16,
        question: "What does the SQL GROUP BY clause do?",
        options: {
          a: "Sorts the results",
          b: "Groups rows with same values",
          c: "Filters records",
          d: "Joins tables"
        },
        correct: "b"
      },
      {
        id: 17,
        question: "In C++, which operator is used to access members of a class through a pointer?",
        options: {
          a: ".",
          b: "->",
          c: "::",
          d: "&"
        },
        correct: "b"
      },
      {
        id: 18,
        question: "What is inheritance in OOP?",
        options: {
          a: "Creating new objects",
          b: "A class acquiring properties from another class",
          c: "Hiding data members",
          d: "Overloading operators"
        },
        correct: "b"
      },
      {
        id: 19,
        question: "Which CSS selector targets elements by their ID?",
        options: {
          a: ".elementId",
          b: "#elementId",
          c: "@elementId",
          d: "*elementId"
        },
        correct: "b"
      },
      {
        id: 20,
        question: "What will be the output of this pseudocode?\n```\nBEGIN\n    SET x = 10\n    SET y = 3\n    SET result = x MOD y\n    PRINT result\nEND\n```",
        options: {
          a: "3",
          b: "1",
          c: "3.33",
          d: "0"
        },
        correct: "b"
      },
      {
        id: 21,
        question: "Which HTML input type creates a password field?",
        options: {
          a: "<input type=\"hidden\">",
          b: "<input type=\"password\">",
          c: "<input type=\"secure\">",
          d: "<input type=\"protected\">"
        },
        correct: "b"
      },
      {
        id: 22,
        question: "In SQL, which JOIN returns records that have matching values in both tables?",
        options: {
          a: "LEFT JOIN",
          b: "RIGHT JOIN",
          c: "INNER JOIN",
          d: "OUTER JOIN"
        },
        correct: "c"
      },
      {
        id: 23,
        question: "What is the correct way to comment multiple lines in C++?",
        options: {
          a: "// comment //",
          b: "/* comment */",
          c: "<!-- comment -->",
          d: "# comment #"
        },
        correct: "b"
      },
      {
        id: 24,
        question: "What will this C++ code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    for(int i = 0; i < 3; i++) {\n        if(i == 1) continue;\n        cout << i << \" \";\n    }\n    return 0;\n}\n```",
        options: {
          a: "0 1 2",
          b: "0 2",
          c: "1 2",
          d: "0 1"
        },
        correct: "b"
      },
      {
        id: 25,
        question: "Which CSS property controls the space between elements?",
        options: {
          a: "padding",
          b: "margin",
          c: "spacing",
          d: "gap"
        },
        correct: "b"
      },
      {
        id: 26,
        question: "In OOP, what is polymorphism?",
        options: {
          a: "Having multiple constructors",
          b: "One interface, multiple implementations",
          c: "Creating multiple objects",
          d: "Inheriting from multiple classes"
        },
        correct: "b"
      },
      {
        id: 27,
        question: "Which HTML tag is used to include external CSS?",
        options: {
          a: "<css>",
          b: "<style>",
          c: "<link>",
          d: "<include>"
        },
        correct: "c"
      },
      {
        id: 28,
        question: "What does the SQL HAVING clause do?",
        options: {
          a: "Filters rows before grouping",
          b: "Filters groups after GROUP BY",
          c: "Sorts the results",
          d: "Joins tables"
        },
        correct: "b"
      },
      {
        id: 29,
        question: "In C, what is the return type of malloc()?",
        options: {
          a: "int*",
          b: "char*",
          c: "void*",
          d: "NULL"
        },
        correct: "c"
      },
      {
        id: 30,
        question: "What will be the result of this flowchart logic?\n```\nSTART → Read A, B → Is A > B? → [Yes: Print A] → [No: Print B] → END\n```\nIf A = 5, B = 8",
        options: {
          a: "5",
          b: "8",
          c: "5 8",
          d: "Error"
        },
        correct: "b"
      },
      {
        id: 31,
        question: "Which CSS property is used to create rounded corners?",
        options: {
          a: "corner-radius",
          b: "border-radius",
          c: "round-corner",
          d: "border-round"
        },
        correct: "b"
      },
      {
        id: 32,
        question: "What is the primary key in a database table?",
        options: {
          a: "The first column",
          b: "A unique identifier for each row",
          c: "The largest value in a column",
          d: "The most frequently used column"
        },
        correct: "b"
      },
      {
        id: 33,
        question: "In C++, what is a destructor?",
        options: {
          a: "A function that creates objects",
          b: "A function called when object is destroyed",
          c: "A function that copies objects",
          d: "A function that initializes variables"
        },
        correct: "b"
      },
      {
        id: 34,
        question: "Which HTML5 semantic tag represents the main content area?",
        options: {
          a: "<content>",
          b: "<main>",
          c: "<section>",
          d: "<article>"
        },
        correct: "b"
      },
      {
        id: 35,
        question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int x = 5;\n    int *p = &x;\n    printf(\"%d %d\", x, *p);\n    return 0;\n}\n```",
        options: {
          a: "5 5",
          b: "5 address",
          c: "address 5",
          d: "Error"
        },
        correct: "a"
      }
    ]
  },

  exam2: {
    title: "Technical Mock Exam 2 - C/C++, SQL, HTML, CSS, OOP",
    questions: [
      {
        id: 1,
        question: "Which of the following is a valid variable name in C++?",
        options: {
          a: "2variable",
          b: "variable-name",
          c: "_variable",
          d: "variable name"
        },
        correct: "c"
      },
      {
        id: 2,
        question: "What is the purpose of the HTML `<head>` section?",
        options: {
          a: "Contains visible content",
          b: "Contains metadata about the document",
          c: "Contains navigation links",
          d: "Contains footer information"
        },
        correct: "b"
      },
      {
        id: 3,
        question: "Which SQL operator is used to search for a specified pattern?",
        options: {
          a: "MATCH",
          b: "FIND",
          c: "LIKE",
          d: "SEARCH"
        },
        correct: "c"
      },
      {
        id: 4,
        question: "What does the CSS box model include?",
        options: {
          a: "Only content",
          b: "Content and padding",
          c: "Content, padding, border, and margin",
          d: "Only border and margin"
        },
        correct: "c"
      },
      {
        id: 5,
        question: "What is abstraction in OOP?",
        options: {
          a: "Making classes concrete",
          b: "Hiding complex implementation details",
          c: "Creating multiple objects",
          d: "Copying class properties"
        },
        correct: "b"
      },
      {
        id: 6,
        question: "What will be the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    int y = 20;\n    int z = (x > y) ? x : y;\n    cout << z << endl;\n    return 0;\n}\n```",
        options: {
          a: "10",
          b: "20",
          c: "30",
          d: "Error"
        },
        correct: "b"
      },
      {
        id: 7,
        question: "Which CSS property is used to set background color?",
        options: {
          a: "bg-color",
          b: "background-color",
          c: "color-background",
          d: "back-color"
        },
        correct: "b"
      },
      {
        id: 8,
        question: "What is the correct syntax for a SQL comment?",
        options: {
          a: "// comment",
          b: "/* comment */",
          c: "-- comment",
          d: "Both b and c"
        },
        correct: "d"
      },
      {
        id: 9,
        question: "In OOP, what is method overloading?",
        options: {
          a: "Changing method implementation in child class",
          b: "Having multiple methods with same name but different parameters",
          c: "Calling parent class method",
          d: "Creating multiple objects"
        },
        correct: "b"
      },
      {
        id: 10,
        question: "Which HTML attribute makes an input field required?",
        options: {
          a: "mandatory",
          b: "required",
          c: "necessary",
          d: "must"
        },
        correct: "b"
      },
      {
        id: 11,
        question: "What is the difference between ++i and i++ in C++?",
        options: {
          a: "No difference",
          b: "++i increments before use, i++ increments after use",
          c: "++i is faster",
          d: "i++ is more secure"
        },
        correct: "b"
      },
      {
        id: 12,
        question: "Which SQL function returns the number of rows?",
        options: {
          a: "COUNT()",
          b: "NUM()",
          c: "ROWS()",
          d: "SIZE()"
        },
        correct: "a"
      },
      {
        id: 13,
        question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int arr[3] = {1, 2, 3};\n    int *p = arr;\n    printf(\"%d\", *(p + 1));\n    return 0;\n}\n```",
        options: {
          a: "1",
          b: "2",
          c: "3",
          d: "Address"
        },
        correct: "b"
      },
      {
        id: 14,
        question: "Which CSS display property removes an element from the document flow?",
        options: {
          a: "hidden",
          b: "invisible",
          c: "none",
          d: "remove"
        },
        correct: "c"
      },
      {
        id: 15,
        question: "What does the HTML `<meta charset=\"UTF-8\">` do?",
        options: {
          a: "Sets page language",
          b: "Sets character encoding",
          c: "Sets page title",
          d: "Sets page description"
        },
        correct: "b"
      },
      {
        id: 16,
        question: "In SQL, what does DISTINCT do?",
        options: {
          a: "Sorts the results",
          b: "Removes duplicate rows",
          c: "Counts rows",
          d: "Groups rows"
        },
        correct: "b"
      },
      {
        id: 17,
        question: "What is a virtual function in C++?",
        options: {
          a: "A function that doesn't exist",
          b: "A function that can be overridden in derived classes",
          c: "A function with no parameters",
          d: "A function that returns void"
        },
        correct: "b"
      },
      {
        id: 18,
        question: "What is composition in OOP?",
        options: {
          a: "Writing music",
          b: "A \"has-a\" relationship between classes",
          c: "Multiple inheritance",
          d: "Method overloading"
        },
        correct: "b"
      },
      {
        id: 19,
        question: "Which CSS property is used for text alignment?",
        options: {
          a: "align",
          b: "text-align",
          c: "alignment",
          d: "text-position"
        },
        correct: "b"
      },
      {
        id: 20,
        question: "What will be the result of this pseudocode?\n```\nBEGIN\n    SET sum = 0\n    FOR i = 1 TO 5\n        sum = sum + i\n    END FOR\n    PRINT sum\nEND\n```",
        options: {
          a: "5",
          b: "10",
          c: "15",
          d: "20"
        },
        correct: "c"
      },
      {
        id: 21,
        question: "Which HTML form method sends data in the URL?",
        options: {
          a: "POST",
          b: "GET",
          c: "PUT",
          d: "SEND"
        },
        correct: "b"
      },
      {
        id: 22,
        question: "What does SQL ORDER BY do?",
        options: {
          a: "Groups rows",
          b: "Filters rows",
          c: "Sorts results",
          d: "Counts rows"
        },
        correct: "c"
      },
      {
        id: 23,
        question: "In C++, what is the scope resolution operator?",
        options: {
          a: "->",
          b: ".",
          c: "::",
          d: "&"
        },
        correct: "c"
      },
      {
        id: 24,
        question: "What will this C++ code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 3;\n    switch(x) {\n        case 1: cout << \"One\"; break;\n        case 2: cout << \"Two\"; break;\n        case 3: cout << \"Three\"; break;\n        default: cout << \"Other\";\n    }\n    return 0;\n}\n```",
        options: {
          a: "One",
          b: "Two",
          c: "Three",
          d: "Other"
        },
        correct: "c"
      },
      {
        id: 25,
        question: "Which CSS property controls the stacking order of elements?",
        options: {
          a: "stack-order",
          b: "z-index",
          c: "layer",
          d: "depth"
        },
        correct: "b"
      },
      {
        id: 26,
        question: "What is multiple inheritance in OOP?",
        options: {
          a: "One class inheriting from multiple classes",
          b: "Multiple objects of same class",
          c: "Multiple methods in a class",
          d: "Multiple constructors"
        },
        correct: "a"
      },
      {
        id: 27,
        question: "Which HTML tag is used for line breaks?",
        options: {
          a: "<break>",
          b: "<br>",
          c: "<lb>",
          d: "<newline>"
        },
        correct: "b"
      },
      {
        id: 28,
        question: "In SQL, what is a foreign key?",
        options: {
          a: "The primary key of another table",
          b: "A key that opens foreign databases",
          c: "The first key in a table",
          d: "A key with foreign characters"
        },
        correct: "a"
      },
      {
        id: 29,
        question: "What does the C++ keyword 'const' do?",
        options: {
          a: "Makes variables changeable",
          b: "Makes variables constant",
          c: "Creates constants only",
          d: "Defines macros"
        },
        correct: "b"
      },
      {
        id: 30,
        question: "Analyze this flowchart logic:\n```\nSTART → Read N → Is N even? → [Yes: Print \"Even\"] → [No: Print \"Odd\"] → END\n```\nIf N = 7, what is the output?",
        options: {
          a: "Even",
          b: "Odd",
          c: "7",
          d: "Error"
        },
        correct: "b"
      },
      {
        id: 31,
        question: "Which CSS property creates space inside an element's border?",
        options: {
          a: "margin",
          b: "padding",
          c: "spacing",
          d: "inner-space"
        },
        correct: "b"
      },
      {
        id: 32,
        question: "What is normalization in databases?",
        options: {
          a: "Making all data the same",
          b: "Organizing data to reduce redundancy",
          c: "Sorting data alphabetically",
          d: "Backing up data"
        },
        correct: "b"
      },
      {
        id: 33,
        question: "In C++, what is a copy constructor?",
        options: {
          a: "Copies source code",
          b: "Creates object as copy of existing object",
          c: "Copies variables",
          d: "Duplicates functions"
        },
        correct: "b"
      },
      {
        id: 34,
        question: "Which HTML5 input type is used for email addresses?",
        options: {
          a: "<input type=\"mail\">",
          b: "<input type=\"email\">",
          c: "<input type=\"address\">",
          d: "<input type=\"e-mail\">"
        },
        correct: "b"
      },
      {
        id: 35,
        question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    char str[] = \"Hello\";\n    printf(\"%c\", str[1]);\n    return 0;\n}\n```",
        options: {
          a: "H",
          b: "e",
          c: "l",
          d: "o"
        },
        correct: "b"
      },
    ],
  },
 

 
        exam3: {
          title: "Technical Mock Exam 3 - C/C++, SQL, HTML, CSS, OOP",
          questions: [
            {
              id: 1,
              question: "Which header file is required for input/output operations in C++?",
              options: {
                a: "<stdio.h>",
                b: "<iostream>",
                c: "<conio.h>",
                d: "<fstream>"
              },
              correct: "b"
            },
            {
              id: 2,
              question: "What is the purpose of the HTML DOCTYPE declaration?",
              options: {
                a: "Defines document type",
                b: "Sets page title",
                c: "Includes CSS",
                d: "Creates navigation"
              },
              correct: "a"
            },
            {
              id: 3,
              question: "Which SQL clause is used with aggregate functions to filter groups?",
              options: {
                a: "WHERE",
                b: "GROUP BY",
                c: "HAVING",
                d: "ORDER BY"
              },
              correct: "c"
            },
            {
              id: 4,
              question: "What is the default position value in CSS?",
              options: {
                a: "relative",
                b: "absolute",
                c: "static",
                d: "fixed"
              },
              correct: "c"
            },
            {
              id: 5,
              question: "Which OOP principle allows a child class to access parent class members?",
              options: {
                a: "Encapsulation",
                b: "Abstraction",
                c: "Inheritance",
                d: "Polymorphism"
              },
              correct: "c"
            },
            {
              id: 6,
              question: "What will be the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 2;\n    cout << a / b << \" \" << a % b << endl;\n    return 0;\n}\n```",
              options: {
                a: "2.5 1",
                b: "2 1",
                c: "3 1",
                d: "2 0"
              },
              correct: "b"
            },
            {
              id: 7,
              question: "Which CSS property is used to import external stylesheets?",
              options: {
                a: "@include",
                b: "@import",
                c: "@external",
                d: "@link"
              },
              correct: "b"
            },
            {
              id: 8,
              question: "What is the correct way to create a database in SQL?",
              options: {
                a: "MAKE DATABASE name;",
                b: "CREATE DATABASE name;",
                c: "NEW DATABASE name;",
                d: "BUILD DATABASE name;"
              },
              correct: "b"
            },
            {
              id: 9,
              question: "What is encapsulation in OOP?",
              options: {
                a: "Combining data and methods in a single unit",
                b: "Creating multiple objects",
                c: "Inheriting properties",
                d: "Overloading methods"
              },
              correct: "a"
            },
            {
              id: 10,
              question: "Which HTML tag creates a dropdown list?",
              options: {
                a: "<dropdown>",
                b: "<select>",
                c: "<list>",
                d: "<options>"
              },
              correct: "b"
            },
            {
              id: 11,
              question: "What is the size of a char in C++?",
              options: {
                a: "1 byte",
                b: "2 bytes",
                c: "4 bytes",
                d: "8 bytes"
              },
              correct: "a"
            },
            {
              id: 12,
              question: "Which SQL command is used to remove a table?",
              options: {
                a: "DELETE TABLE",
                b: "REMOVE TABLE",
                c: "DROP TABLE",
                d: "DESTROY TABLE"
              },
              correct: "c"
            },
            {
              id: 13,
              question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int x = 1;\n    while(x <= 3) {\n        printf(\"%d \", x);\n        x++;\n    }\n    return 0;\n}\n```",
              options: {
                a: "1 2 3",
                b: "1 2 3 4",
                c: "2 3 4",
                d: "Infinite loop"
              },
              correct: "a"
            },
            {
              id: 14,
              question: "Which CSS property controls font size?",
              options: {
                a: "text-size",
                b: "font-size",
                c: "size",
                d: "text-height"
              },
              correct: "b"
            },
            {
              id: 15,
              question: "What does the HTML `<title>` tag do?",
              options: {
                a: "Creates headings",
                b: "Sets document title shown in browser tab",
                c: "Makes text bold",
                d: "Creates page sections"
              },
              correct: "b"
            },
            {
              id: 16,
              question: "Which SQL aggregate function finds the average value?",
              options: {
                a: "MEAN()",
                b: "AVERAGE()",
                c: "AVG()",
                d: "MEDIAN()"
              },
              correct: "c"
            },
            {
              id: 17,
              question: "What happens when you delete an object in C++?",
              options: {
                a: "Memory is automatically freed",
                b: "Destructor is called",
                c: "Object becomes null",
                d: "Nothing happens"
              },
              correct: "b"
            },
            {
              id: 18,
              question: "What is association in OOP?",
              options: {
                a: "A relationship between classes",
                b: "Creating new objects",
                c: "Inheriting properties",
                d: "Overloading methods"
              },
              correct: "a"
            },
            {
              id: 19,
              question: "Which CSS property is used to set the width of an element?",
              options: {
                a: "size",
                b: "width",
                c: "length",
                d: "dimension"
              },
              correct: "b"
            },
            {
              id: 20,
              question: "What will be the result of this pseudocode?\n```\nBEGIN\n    SET x = 5\n    WHILE x > 0\n        PRINT x\n        x = x - 2\n    END WHILE\nEND\n```",
              options: {
                a: "5 3 1",
                b: "5 4 3 2 1",
                c: "5 3 1 -1",
                d: "Infinite loop"
              },
              correct: "a"
            },
            {
              id: 21,
              question: "Which HTML attribute specifies alternative text for images?",
              options: {
                a: "alt",
                b: "title",
                c: "description",
                d: "text"
              },
              correct: "a"
            },
            {
              id: 22,
              question: "What does the SQL UPDATE command do?",
              options: {
                a: "Adds new records",
                b: "Modifies existing records",
                c: "Deletes records",
                d: "Creates tables"
              },
              correct: "b"
            },
            {
              id: 23,
              question: "In C++, what is function overloading?",
              options: {
                a: "Calling functions multiple times",
                b: "Multiple functions with same name but different parameters",
                c: "Creating large functions",
                d: "Copying function code"
              },
              correct: "b"
            },
            {
              id: 24,
              question: "What will this C++ code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {10, 20, 30};\n    cout << arr[0] + arr[2] << endl;\n    return 0;\n}\n```",
              options: {
                a: "30",
                b: "40",
                c: "50",
                d: "60"
              },
              correct: "b"
            },
            {
              id: 25,
              question: "Which CSS property makes elements invisible but keeps their space?",
              options: {
                a: "display: none",
                b: "visibility: hidden",
                c: "opacity: 0",
                d: "hide: true"
              },
              correct: "b"
            },
            {
              id: 26,
              question: "What is the diamond problem in OOP?",
              options: {
                a: "Creating diamond-shaped objects",
                b: "Ambiguity in multiple inheritance",
                c: "Memory allocation issues",
                d: "Performance problems"
              },
              correct: "b"
            },
            {
              id: 27,
              question: "Which HTML tag is used to create tables?",
              options: {
                a: "<table>",
                b: "<tab>",
                c: "<grid>",
                d: "<data>"
              },
              correct: "a"
            },
            {
              id: 28,
              question: "In SQL, what does the DELETE command do?",
              options: {
                a: "Removes table structure",
                b: "Removes specific records",
                c: "Removes database",
                d: "Removes columns"
              },
              correct: "b"
            },
            {
              id: 29,
              question: "What is a reference in C++?",
              options: {
                a: "A pointer to memory",
                b: "An alias for another variable",
                c: "A function parameter",
                d: "A constant value"
              },
              correct: "b"
            },
            {
              id: 30,
              question: "What will this flowchart output?\n```\nSTART → SET i=1 → Is i<=3? → [Yes: PRINT i, i=i+1] → [No: END]\n```",
              options: {
                a: "1 2 3",
                b: "1 2 3 4",
                c: "0 1 2 3",
                d: "2 3 4"
              },
              correct: "a"
            },
            {
              id: 31,
              question: "Which CSS property controls text spacing?",
              options: {
                a: "letter-spacing",
                b: "text-spacing",
                c: "character-spacing",
                d: "word-gap"
              },
              correct: "a"
            },
            {
              id: 32,
              question: "What is an index in a database?",
              options: {
                a: "The first row of a table",
                b: "A structure to speed up queries",
                c: "A type of key",
                d: "A table counter"
              },
              correct: "b"
            },
            {
              id: 33,
              question: "In C++, what is the this pointer?",
              options: {
                a: "Points to current object",
                b: "Points to previous object",
                c: "Points to next object",
                d: "Points to parent object"
              },
              correct: "a"
            },
            {
              id: 34,
              question: "Which HTML5 tag represents a section of content?",
              options: {
                a: "<div>",
                b: "<section>",
                c: "<part>",
                d: "<segment>"
              },
              correct: "b"
            },
            {
              id: 35,
              question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int x = 8;\n    printf(\"%d %d\", x>>1, x<<1);\n    return 0;\n}\n```",
              options: {
                a: "4 16",
                b: "8 8",
                c: "7 9",
                d: "4 8"
              },
              correct: "a"
            }
          ]
        },
      
        exam4: {
          title: "Technical Mock Exam 4 - C/C++, SQL, HTML, CSS, OOP",
          questions: [
            {
              id: 1,
              question: "Which C++ operator is used for dynamic memory allocation?",
              options: {
                a: "malloc",
                b: "new",
                c: "alloc",
                d: "create"
              },
              correct: "b"
            },
            {
              id: 2,
              question: "What is the correct way to link a CSS file in HTML?",
              options: {
                a: '<link rel="stylesheet" href="style.css">',
                b: '<css src="style.css">',
                c: '<style link="style.css">',
                d: '<include css="style.css">'
              },
              correct: "a"
            },
            {
              id: 3,
              question: "Which SQL constraint ensures unique values in a column?",
              options: {
                a: "PRIMARY",
                b: "UNIQUE",
                c: "DISTINCT",
                d: "NOT NULL"
              },
              correct: "b"
            },
            {
              id: 4,
              question: "What does the CSS float property do?",
              options: {
                a: "Makes elements transparent",
                b: "Positions elements to left or right",
                c: "Makes elements move up and down",
                d: "Adds animation to elements"
              },
              correct: "b"
            },
            {
              id: 5,
              question: "What is method overriding in OOP?",
              options: {
                a: "Creating multiple methods with same name",
                b: "Replacing parent class method in child class",
                c: "Deleting methods",
                d: "Copying methods"
              },
              correct: "b"
            },
            {
              id: 6,
              question: "What will be the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    if(x > 3 && x < 10)\n        cout << \"Valid\";\n    else\n        cout << \"Invalid\";\n    return 0;\n}\n```",
              options: {
                a: "Valid",
                b: "Invalid",
                c: "Error",
                d: "No output"
              },
              correct: "a"
            },
            {
              id: 7,
              question: "Which CSS property is used to change text case?",
              options: {
                a: "text-case",
                b: "text-transform",
                c: "font-case",
                d: "case-transform"
              },
              correct: "b"
            },
            {
              id: 8,
              question: "What does the SQL ALTER TABLE command do?",
              options: {
                a: "Changes table data",
                b: "Modifies table structure",
                c: "Creates new table",
                d: "Deletes table"
              },
              correct: "b"
            },
            {
              id: 9,
              question: "What is a pure virtual function in C++?",
              options: {
                a: "A function with no implementation",
                b: "A function that returns void",
                c: "A function with virtual keyword",
                d: "A clean function"
              },
              correct: "a"
            },
            {
              id: 10,
              question: "Which HTML tag is used for the largest heading?",
              options: {
                a: "<h6>",
                b: "<h1>",
                c: "<header>",
                d: "<big>"
              },
              correct: "b"
            },
            {
              id: 11,
              question: "What is the result of 5/2 in C++ (integer division)?",
              options: {
                a: "2.5",
                b: "2",
                c: "3",
                d: "Error"
              },
              correct: "b"
            },
            {
              id: 12,
              question: "Which SQL function converts text to uppercase?",
              options: {
                a: "UPPER()",
                b: "UCASE()",
                c: "CAPS()",
                d: "UPPERCASE()"
              },
              correct: "a"
            },
            {
              id: 13,
              question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int i;\n    for(i = 0; i < 3; i++) {\n        printf(\"%d\", i);\n    }\n    printf(\"%d\", i);\n    return 0;\n}\n```",
              options: {
                a: "0123",
                b: "012",
                c: "0123",
                d: "123"
              },
              correct: "a"
            },
            {
              id: 14,
              question: "Which CSS property controls the opacity of an element?",
              options: {
                a: "transparency",
                b: "opacity",
                c: "alpha",
                d: "visibility"
              },
              correct: "b"
            },
            {
              id: 15,
              question: "What does the HTML `<span>` tag do?",
              options: {
                a: "Creates line breaks",
                b: "Groups inline elements",
                c: "Creates paragraphs",
                d: "Makes text bold"
              },
              correct: "b"
            },
            {
              id: 16,
              question: "In SQL, what is a subquery?",
              options: {
                a: "A query within another query",
                b: "A partial query",
                c: "A small query",
                d: "A query under development"
              },
              correct: "a"
            },
            {
              id: 17,
              question: "What is a template in C++?",
              options: {
                a: "A design pattern",
                b: "A generic programming feature",
                c: "A predefined class",
                d: "A header file"
              },
              correct: "b"
            },
            {
              id: 18,
              question: "What is aggregation in OOP?",
              options: {
                a: "A weak \"has-a\" relationship",
                b: "Strong composition",
                c: "Multiple inheritance",
                d: "Method combination"
              },
              correct: "a"
            },
            {
              id: 19,
              question: "Which CSS property sets the space between lines of text?",
              options: {
                a: "line-height",
                b: "line-spacing",
                c: "text-height",
                d: "row-height"
              },
              correct: "a"
            },
            {
              id: 20,
              question: "What will be the result of this pseudocode?\n```\nBEGIN\n    SET a = 10\n    SET b = 20\n    IF a > b THEN\n        PRINT \"A is greater\"\n    ELSE\n        PRINT \"B is greater\"\n    END IF\nEND\n```",
              options: {
                a: "A is greater",
                b: "B is greater",
                c: "Equal",
                d: "Error"
              },
              correct: "b"
            },
            {
              id: 21,
              question: "Which HTML input type creates a checkbox?",
              options: {
                a: '<input type="check">',
                b: '<input type="checkbox">',
                c: '<input type="box">',
                d: '<input type="tick">'
              },
              correct: "b"
            },
            {
              id: 22,
              question: "What does the SQL BETWEEN operator do?",
              options: {
                a: "Joins two tables",
                b: "Selects values within a range",
                c: "Compares two columns",
                d: "Creates relationships"
              },
              correct: "b"
            },
            {
              id: 23,
              question: "In C++, what is namespace used for?",
              options: {
                a: "Creating variables",
                b: "Organizing code and avoiding name conflicts",
                c: "Memory management",
                d: "File operations"
              },
              correct: "b"
            },
            {
              id: 24,
              question: "What will this C++ code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    string str = \"Hello\";\n    cout << str.length() << endl;\n    return 0;\n}\n```",
              options: {
                a: "4",
                b: "5",
                c: "6",
                d: "Error"
              },
              correct: "b"
            },
            {
              id: 25,
              question: "Which CSS property is used to create flexible box layouts?",
              options: {
                a: "flexbox",
                b: "display: flex",
                c: "flex-layout",
                d: "flexible"
              },
              correct: "b"
            },
            {
              id: 26,
              question: "What is an abstract class in OOP?",
              options: {
                a: "A class with no methods",
                b: "A class that cannot be instantiated",
                c: "A class with only variables",
                d: "A temporary class"
              },
              correct: "b"
            },
            {
              id: 27,
              question: "Which HTML tag is used to group table rows?",
              options: {
                a: "<group>",
                b: "<tbody>",
                c: "<rows>",
                d: "<section>"
              },
              correct: "b"
            },
            {
              id: 28,
              question: "In SQL, what does the LIMIT clause do?",
              options: {
                a: "Limits column size",
                b: "Limits number of returned rows",
                c: "Limits table size",
                d: "Limits query time"
              },
              correct: "b"
            },
            {
              id: 29,
              question: "What is RAII in C++?",
              options: {
                a: "Resource Acquisition Is Initialization",
                b: "Random Access In Integration",
                c: "Rapid Application Interface Implementation",
                d: "Resource Allocation In Inheritance"
              },
              correct: "a"
            },
            {
              id: 30,
              question: "Analyze this flowchart:\n```\nSTART → SET sum=0, i=1 → Is i<=5? → [Yes: sum=sum+i, i=i+1] → [No: PRINT sum] → END\n```\nWhat is the output?",
              options: {
                a: "15",
                b: "10",
                c: "5",
                d: "25"
              },
              correct: "a"
            },
            {
              id: 31,
              question: "Which CSS property controls how text wraps?",
              options: {
                a: "text-wrap",
                b: "white-space",
                c: "word-wrap",
                d: "text-overflow"
              },
              correct: "b"
            },
            {
              id: 32,
              question: "What is a stored procedure in databases?",
              options: {
                a: "A saved query",
                b: "A precompiled set of SQL statements",
                c: "A backup procedure",
                d: "A table structure"
              },
              correct: "b"
            },
            {
              id: 33,
              question: "In C++, what is multiple inheritance?",
              options: {
                a: "Creating multiple objects",
                b: "A class inheriting from multiple base classes",
                c: "Having multiple methods",
                d: "Using multiple files"
              },
              correct: "b"
            },
            {
              id: 34,
              question: "Which HTML5 attribute makes elements editable?",
              options: {
                a: "editable",
                b: "contenteditable",
                c: "edit",
                d: "modifiable"
              },
              correct: "b"
            },
            {
              id: 35,
              question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    char c = 'A';\n    printf(\"%d\", c);\n    return 0;\n}\n```",
              options: {
                a: "A",
                b: "65",
                c: "0",
                d: "Error"
              },
              correct: "b"
            }
          ]
        },
      
        exam5: {
          title: "Technical Mock Exam 5 - C/C++, SQL, HTML, CSS, OOP",
          questions: [
            {
              id: 1,
              question: "Which C++ feature allows operator redefinition?",
              options: {
                a: "Function overloading",
                b: "Operator overloading",
                c: "Method overriding",
                d: "Template specialization"
              },
              correct: "b"
            },
            {
              id: 2,
              question: "What is the purpose of the HTML `<meta>` tag?",
              options: {
                a: "Creates metadata about the document",
                b: "Defines page content",
                c: "Links external files",
                d: "Creates navigation"
              },
              correct: "a"
            },
            {
              id: 3,
              question: "Which SQL command creates a new table?",
              options: {
                a: "MAKE TABLE",
                b: "CREATE TABLE",
                c: "NEW TABLE",
                d: "BUILD TABLE"
              },
              correct: "b"
            },
            {
              id: 4,
              question: "What does the CSS position: absolute do?",
              options: {
                a: "Positions relative to parent",
                b: "Positions relative to viewport",
                c: "Positions relative to nearest positioned ancestor",
                d: "Keeps normal flow"
              },
              correct: "c"
            },
            {
              id: 5,
              question: "What is data hiding in OOP?",
              options: {
                a: "Deleting data",
                b: "Making data members private",
                c: "Encrypting data",
                d: "Compressing data"
              },
              correct: "b"
            },
            {
              id: 6,
              question: "What will be the output of this C++ code?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 0;\n    cout << (x == 0 ? \"Zero\" : \"Non-zero\");\n    return 0;\n}\n```",
              options: {
                a: "Zero",
                b: "Non-zero",
                c: "0",
                d: "Error"
              },
              correct: "a"
            },
            {
              id: 7,
              question: "Which CSS property creates a shadow effect?",
              options: {
                a: "shadow",
                b: "box-shadow",
                c: "drop-shadow",
                d: "text-shadow"
              },
              correct: "b"
            },
            {
              id: 8,
              question: "What does the SQL UNION operator do?",
              options: {
                a: "Joins tables horizontally",
                b: "Combines results from multiple SELECT statements",
                c: "Creates relationships",
                d: "Merges columns"
              },
              correct: "b"
            },
            {
              id: 9,
              question: "What is a friend function in C++?",
              options: {
                a: "A function that calls other functions",
                b: "A function that can access private members of a class",
                c: "A function defined inside a class",
                d: "A function with no parameters"
              },
              correct: "b"
            },
            {
              id: 10,
              question: "Which HTML attribute specifies the character encoding?",
              options: {
                a: "encoding",
                b: "charset",
                c: "character-set",
                d: "encode"
              },
              correct: "b"
            },
            {
              id: 11,
              question: "What is the output of sizeof(char) in C++?",
              options: {
                a: "1",
                b: "2",
                c: "4",
                d: "8"
              },
              correct: "a"
            },
            {
              id: 12,
              question: "Which SQL keyword removes duplicate rows from results?",
              options: {
                a: "UNIQUE",
                b: "DISTINCT",
                c: "REMOVE",
                d: "FILTER"
              },
              correct: "b"
            },
            {
              id: 13,
              question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int y = ++x + x++;\n    printf(\"%d\", y);\n    return 0;\n}\n```",
              options: {
                a: "21",
                b: "22",
                c: "23",
                d: "24"
              },
              correct: "b"
            },
            {
              id: 14,
              question: "Which CSS property controls horizontal alignment of block elements?",
              options: {
                a: "align",
                b: "text-align",
                c: "margin: auto",
                d: "horizontal-align"
              },
              correct: "c"
            },
            {
              id: 15,
              question: "What does the HTML `<nav>` tag represent?",
              options: {
                a: "New content",
                b: "Navigation links",
                c: "Normal text",
                d: "Nested content"
              },
              correct: "b"
            },
            {
              id: 16,
              question: "In SQL, what does the COUNT(*) function return?",
              options: {
                a: "Number of columns",
                b: "Number of rows including NULLs",
                c: "Number of tables",
                d: "Number of databases"
              },
              correct: "b"
            },
            {
              id: 17,
              question: "What is a static member in C++?",
              options: {
                a: "A member that never changes",
                b: "A member shared by all objects of the class",
                c: "A member that cannot be accessed",
                d: "A member defined inside functions"
              },
              correct: "b"
            },
            {
              id: 18,
              question: "What is the Liskov Substitution Principle in OOP?",
              options: {
                a: "Objects can be replaced by their subtypes",
                b: "Classes should have single responsibility",
                c: "Depend on abstractions, not concretions",
                d: "Classes should be open for extension"
              },
              correct: "a"
            },
            {
              id: 19,
              question: "Which CSS property creates rounded borders?",
              options: {
                a: "border-round",
                b: "border-radius",
                c: "round-border",
                d: "corner-radius"
              },
              correct: "b"
            },
            {
              id: 20,
              question: "What will be the result of this pseudocode?\n```\nBEGIN\n    SET n = 4\n    SET factorial = 1\n    FOR i = 1 TO n\n        factorial = factorial * i\n    END FOR\n    PRINT factorial\nEND\n```",
              options: {
                a: "10",
                b: "24",
                c: "4",
                d: "16"
              },
              correct: "b"
            },
            {
              id: 21,
              question: "Which HTML form element creates radio buttons?",
              options: {
                a: '<input type="radio">',
                b: "<radio>",
                c: '<input type="button">',
                d: '<button type="radio">'
              },
              correct: "a"
            },
            {
              id: 22,
              question: "What does the SQL INSERT INTO statement do?",
              options: {
                a: "Inserts columns",
                b: "Inserts new rows",
                c: "Inserts tables",
                d: "Inserts databases"
              },
              correct: "b"
            },
            {
              id: 23,
              question: "In C++, what does the virtual keyword do?",
              options: {
                a: "Makes functions invisible",
                b: "Enables dynamic binding",
                c: "Creates virtual memory",
                d: "Defines templates"
              },
              correct: "b"
            },
            {
              id: 24,
              question: "What will this C++ code output?\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    cout << *(arr + 3) << endl;\n    return 0;\n}\n```",
              options: {
                a: "3",
                b: "4",
                c: "5",
                d: "Address"
              },
              correct: "b"
            },
            {
              id: 25,
              question: "Which CSS property makes elements responsive to screen size?",
              options: {
                a: "responsive",
                b: "media-query",
                c: "@media",
                d: "screen-size"
              },
              correct: "c"
            },
            {
              id: 26,
              question: "What is coupling in OOP?",
              options: {
                a: "Joining two classes",
                b: "The degree of interdependence between modules",
                c: "Creating object relationships",
                d: "Inheriting properties"
              },
              correct: "b"
            },
            {
              id: 27,
              question: "Which HTML tag creates a form?",
              options: {
                a: "<form>",
                b: "<input>",
                c: "<field>",
                d: "<data>"
              },
              correct: "a"
            },
            {
              id: 28,
              question: "In SQL, what is the purpose of the WHERE clause?",
              options: {
                a: "Specifies which columns to select",
                b: "Filters rows based on conditions",
                c: "Orders the results",
                d: "Groups the results"
              },
              correct: "b"
            },
            {
              id: 29,
              question: "What is exception handling in C++?",
              options: {
                a: "Handling special cases",
                b: "Managing runtime errors",
                c: "Creating exceptions",
                d: "Avoiding errors"
              },
              correct: "b"
            },
            {
              id: 30,
              question: "What will this flowchart output?\n```\nSTART → SET x=5 → Is x>0? → [Yes: PRINT x, x=x-1] → [No: END]\n```",
              options: {
                a: "5 4 3 2 1",
                b: "5",
                c: "4 3 2 1 0",
                d: "Infinite loop"
              },
              correct: "a"
            },
            {
              id: 31,
              question: "Which CSS property controls element positioning?",
              options: {
                a: "location",
                b: "position",
                c: "placement",
                d: "coordinate"
              },
              correct: "b"
            },
            {
              id: 32,
              question: "What is a view in databases?",
              options: {
                a: "A way to see data",
                b: "A virtual table based on SQL query results",
                c: "A table display",
                d: "A database interface"
              },
              correct: "b"
            },
            {
              id: 33,
              question: "In C++, what is the difference between struct and class?",
              options: {
                a: "No difference",
                b: "Default access level (public vs private)",
                c: "Memory usage",
                d: "Performance"
              },
              correct: "b"
            },
            {
              id: 34,
              question: "Which HTML5 input type validates email format?",
              options: {
                a: "email",
                b: "e-mail",
                c: "mail",
                d: "address"
              },
              correct: "a"
            },
            {
              id: 35,
              question: "What will be the output of this C code?\n```c\n#include <stdio.h>\nint main() {\n    int a = 5, b = 10;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}\n```",
              options: {
                a: "5",
                b: "10",
                c: "15",
                d: "0"
              },
              correct: "b"
            }
          ]
        },

        exam6: {
          title: "Technical Mock Exam 6 - C/C++, SQL, HTML, CSS, OOP",
          questions: [
            {
              id: 1,
              question: "What is the size of a pointer in a 64-bit system?",
              options: {
                a: "4 bytes",
                b: "8 bytes",
                c: "Depends on the data type it points to",
                d: "16 bytes"
              },
              correct: "b"
            },
            {
              id: 2,
              question: "Which SQL command is used to create a new table?",
              options: {
                a: "NEW TABLE",
                b: "CREATE TABLE",
                c: "MAKE TABLE",
                d: "ADD TABLE"
              },
              correct: "b"
            },
            {
              id: 3,
              question: "What does the following C code output?\n```c\nint i = 0;\nwhile(i < 3) {\n  printf(\"%d \", i++);\n}\n```",
              options: {
                a: "0 1 2",
                b: "0 1 2 3",
                c: "1 2 3",
                d: "Infinite loop"
              },
              correct: "a",
              explanation: "Output: 0 1 2 - i starts at 0, prints and increments until i reaches 3"
            },
            {
              id: 4,
              question: "Which HTML element is used to define the most important heading?",
              options: {
                a: "<header>",
                b: "<h1>",
                c: "<title>",
                d: "<head>"
              },
              correct: "b"
            },
            {
              id: 5,
              question: "In OOP, what is inheritance?",
              options: {
                a: "Hiding implementation details",
                b: "Creating objects from classes",
                c: "Acquiring properties and methods from a parent class",
                d: "Having multiple forms of the same method"
              },
              correct: "c"
            },
            {
              id: 6,
              question: "What does the following SQL query return?\n```sql\nSELECT * FROM products WHERE price BETWEEN 100 AND 200;\n```",
              options: {
                a: "Products with price > 100 and < 200",
                b: "Products with price >= 100 and <= 200",
                c: "Products with price = 100 or price = 200",
                d: "All products"
              },
              correct: "b"
            },
            {
              id: 7,
              question: "Which CSS property is used to change the text color?",
              options: {
                a: "text-color",
                b: "font-color",
                c: "color",
                d: "text-style"
              },
              correct: "c"
            },
            {
              id: 8,
              question: "What does the following C++ code output?\n```cpp\nint x = 10, y = 20;\nint *p1 = &x, *p2 = &y;\n*p1 = *p2;\ncout << x << \" \" << y;\n```",
              options: {
                a: "10 20",
                b: "20 20",
                c: "20 10",
                d: "10 10"
              },
              correct: "b",
              explanation: "Output: 20 20 - *p1 = *p2 assigns the value of y (20) to x"
            },
            {
              id: 9,
              question: "Which SQL JOIN returns only matching records from both tables?",
              options: {
                a: "LEFT JOIN",
                b: "RIGHT JOIN",
                c: "INNER JOIN",
                d: "OUTER JOIN"
              },
              correct: "c"
            },
            {
              id: 10,
              question: "What is the correct HTML syntax for creating a hyperlink?",
              options: {
                a: "<a url='http://example.com'>Link</a>",
                b: "<a href='http://example.com'>Link</a>",
                c: "<link href='http://example.com'>Link</link>",
                d: "<url href='http://example.com'>Link</url>"
              },
              correct: "b"
            },
            {
              id: 11,
              question: "In C, what is the difference between malloc() and calloc()?",
              options: {
                a: "No difference",
                b: "malloc() initializes memory to zero, calloc() doesn't",
                c: "calloc() initializes memory to zero, malloc() doesn't",
                d: "malloc() is faster than calloc()"
              },
              correct: "c"
            },
            {
              id: 12,
              question: "Which CSS property is used to make text italic?",
              options: {
                a: "text-style: italic",
                b: "font-style: italic",
                c: "text-decoration: italic",
                d: "font-weight: italic"
              },
              correct: "b"
            },
            {
              id: 13,
              question: "What does the following C code output?\n```c\nint arr[5] = {1, 2, 3};\nprintf(\"%d %d\", arr[3], arr[4]);\n```",
              options: {
                a: "3 undefined",
                b: "0 0",
                c: "Garbage values",
                d: "Runtime error"
              },
              correct: "b",
              explanation: "Output: 0 0 - Uninitialized array elements are set to 0 in C"
            },
            {
              id: 14,
              question: "Which SQL aggregate function returns the number of rows?",
              options: {
                a: "SUM()",
                b: "COUNT()",
                c: "AVG()",
                d: "MAX()"
              },
              correct: "b"
            },
            {
              id: 15,
              question: "What is abstraction in OOP?",
              options: {
                a: "Creating multiple objects from one class",
                b: "Hiding complex implementation details and showing only essential features",
                c: "Inheriting from parent classes",
                d: "Encapsulating data and methods"
              },
              correct: "b"
            },
            {
              id: 16,
              question: "Which CSS display value removes an element from the document flow?",
              options: {
                a: "display: hidden",
                b: "display: none",
                c: "display: invisible",
                d: "display: remove"
              },
              correct: "b"
            },
            {
              id: 17,
              question: "What is the result of this SQL query?\n```sql\nSELECT department FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);\n```",
              options: {
                a: "Average salary of all departments",
                b: "Departments of employees earning above average salary",
                c: "All departments",
                d: "Employees earning above average salary"
              },
              correct: "b"
            },
            {
              id: 18,
              question: "In C++, what is the scope resolution operator?",
              options: {
                a: "::",
                b: "->",
                c: ".",
                d: "&"
              },
              correct: "a"
            },
            {
              id: 19,
              question: "Which HTML attribute specifies where to open a linked document?",
              options: {
                a: "destination",
                b: "target",
                c: "window",
                d: "open"
              },
              correct: "b"
            },
            {
              id: 20,
              question: "What does the following C++ code output?\n```cpp\nstruct Point { int x, y; };\nPoint p = {10, 20};\nPoint *ptr = &p;\ncout << ptr->x + ptr->y;\n```",
              options: {
                a: "10",
                b: "20",
                c: "30",
                d: "Compilation error"
              },
              correct: "c",
              explanation: "Output: 30 - ptr->x is 10, ptr->y is 20, so 10 + 20 = 30"
            },
            {
              id: 21,
              question: "Which CSS property controls the transparency of an element?",
              options: {
                a: "transparency",
                b: "opacity",
                c: "alpha",
                d: "visible"
              },
              correct: "b"
            },
            {
              id: 22,
              question: "In OOP, what is composition?",
              options: {
                a: "A class inheriting from multiple classes",
                b: "A class containing objects of other classes",
                c: "A class implementing multiple interfaces",
                d: "A class with multiple constructors"
              },
              correct: "b"
            },
            {
              id: 23,
              question: "Which SQL clause is used to eliminate duplicate rows?",
              options: {
                a: "UNIQUE",
                b: "DISTINCT",
                c: "DIFFERENT",
                d: "NO_DUPLICATES"
              },
              correct: "b"
            },
            {
              id: 24,
              question: "What does the following C code output?\n```c\nchar *str = \"Hello\";\nstr[0] = 'h';\nprintf(\"%s\", str);\n```",
              options: {
                a: "hello",
                b: "Hello",
                c: "Compilation error",
                d: "Runtime error or undefined behavior"
              },
              correct: "d",
              explanation: "Undefined behavior - String literals are stored in read-only memory"
            },
            {
              id: 25,
              question: "Which HTML element is used for the largest heading?",
              options: {
                a: "<h6>",
                b: "<h1>",
                c: "<header>",
                d: "<big>"
              },
              correct: "b"
            },
            {
              id: 26,
              question: "What is the CSS property to set the background color?",
              options: {
                a: "bg-color",
                b: "background",
                c: "background-color",
                d: "color-background"
              },
              correct: "c"
            },
            {
              id: 27,
              question: "In C++, what is a virtual function?",
              options: {
                a: "A function that doesn't exist",
                b: "A function that can be overridden in derived classes",
                c: "A function without parameters",
                d: "A function that returns void"
              },
              correct: "b"
            },
            {
              id: 28,
              question: "Which SQL command is used to remove a table from the database?",
              options: {
                a: "DELETE TABLE",
                b: "REMOVE TABLE",
                c: "DROP TABLE",
                d: "DESTROY TABLE"
              },
              correct: "c"
            },
            {
              id: 29,
              question: "What does the following C++ code output?\n```cpp\nint a = 5;\nint b = a++ + ++a;\ncout << a << \" \" << b;\n```",
              options: {
                a: "7 12",
                b: "7 11",
                c: "6 11",
                d: "Undefined behavior"
              },
              correct: "a",
              explanation: "Output: 7 12 - a++ uses 5 then increments to 6, ++a increments to 7, so b = 5 + 7 = 12"
            },
            {
              id: 30,
              question: "Which HTML element is used to define a table row?",
              options: {
                a: "<row>",
                b: "<tr>",
                c: "<td>",
                d: "<table-row>"
              },
              correct: "b"
            },
            {
              id: 31,
              question: "In CSS, what does 'float: left' do?",
              options: {
                a: "Aligns text to the left",
                b: "Moves element to the left and allows other elements to wrap around it",
                c: "Sets left margin to 0",
                d: "Rotates element to the left"
              },
              correct: "b"
            },
            {
              id: 32,
              question: "What is method overriding in OOP?",
              options: {
                a: "Having multiple methods with the same name",
                b: "A child class providing a specific implementation of a parent class method",
                c: "Calling multiple methods at once",
                d: "Having methods with different parameter types"
              },
              correct: "b"
            },
            {
              id: 33,
              question: "Which SQL wildcard character represents any sequence of characters?",
              options: {
                a: "_",
                b: "*",
                c: "%",
                d: "?"
              },
              correct: "c"
            },
            {
              id: 34,
              question: "What does the following C code output?\n```c\nint x = 10;\nint y = (x > 5) ? x * 2 : x / 2;\nprintf(\"%d\", y);\n```",
              options: {
                a: "5",
                b: "10",
                c: "20",
                d: "2"
              },
              correct: "c",
              explanation: "Output: 20 - Ternary operator: since 10 > 5 is true, y = 10 * 2 = 20"
            },
            {
              id: 35,
              question: "Which CSS property is used to create rounded corners?",
              options: {
                a: "border-radius",
                b: "corner-radius",
                c: "border-round",
                d: "round-corners"
              },
              correct: "a"
            }
          ]
        },

        exam7: { 
          title: "Technical Mock Exam 7 - C/C++, SQL, HTML, CSS, OOP (Intermediate & Tricky)",
          questions: [
            {
              id: 1,
              question: "What is the size of a pointer in a 64-bit system?",
              options: {
                a: "4 bytes",
                b: "8 bytes",
                c: "Depends on the data type it points to",
                d: "16 bytes"
              },
              correct: "b"
            },
            {
              id: 2,
              question: "Which HTML5 semantic element should be used for navigation links?",
              options: {
                a: "<menu>",
                b: "<navigation>",
                c: "<nav>",
                d: "<links>"
              },
              correct: "c"
            },
            {
              id: 3,
              question: "In CSS, which selector has the highest specificity?",
              options: {
                a: "element",
                b: ".class",
                c: "#id",
                d: "inline style"
              },
              correct: "d"
            },
            {
              id: 4,
              question: "What is the result of the following SQL query?\n\nSELECT COUNT(*) FROM employees WHERE salary > 50000 AND department = 'IT';",
              options: {
                a: "Returns the total number of employees",
                b: "Returns the count of IT employees with salary > 50000",
                c: "Returns the sum of salaries in IT department",
                d: "Syntax error"
              },
              correct: "b"
            },
            {
              id: 5,
              question: "Which OOP principle allows a child class to override parent class methods?",
              options: {
                a: "Encapsulation",
                b: "Abstraction",
                c: "Inheritance",
                d: "Polymorphism"
              },
              correct: "d"
            },
            {
              id: 6,
              question: "What will be the output of this C code?\n\n```c\nint x = 5;\nprintf(\"%d %d\", ++x, x++);\n```",
              options: {
                a: "6 5",
                b: "6 6",
                c: "7 6",
                d: "Undefined behavior"
              },
              correct: "d"
            },
            {
              id: 7,
              question: "In CSS, what does the 'box-sizing: border-box' property do?",
              options: {
                a: "Includes padding and border in element's total width/height",
                b: "Excludes padding and border from element's total width/height",
                c: "Only includes border in total width/height",
                d: "Only includes padding in total width/height"
              },
              correct: "a"
            },
            {
              id: 8,
              question: "Which SQL clause is used to filter groups in a GROUP BY query?",
              options: {
                a: "WHERE",
                b: "FILTER",
                c: "HAVING",
                d: "GROUP_FILTER"
              },
              correct: "c"
            },
            {
              id: 9,
              question: "What is the output of this C++ code?\n\n```cpp\nint arr[] = {1, 2, 3, 4};\nint *p = arr + 2;\nprintf(\"%d\", *p);\n```",
              options: {
                a: "1",
                b: "2",
                c: "3",
                d: "4"
              },
              correct: "c"
            },
            {
              id: 10,
              question: "Which HTML attribute is required for the <img> tag to be valid?",
              options: {
                a: "src",
                b: "alt",
                c: "Both src and alt",
                d: "width"
              },
              correct: "c"
            },
            {
              id: 11,
              question: "What does the 'static' keyword do in C when applied to a local variable?",
              options: {
                a: "Makes the variable global",
                b: "Preserves the variable's value between function calls",
                c: "Prevents the variable from being modified",
                d: "Allocates memory on heap"
              },
              correct: "b"
            },
            {
              id: 12,
              question: "What is the result of this SQL query?\n\nSELECT name FROM students WHERE age BETWEEN 18 AND 25 OR grade = 'A';",
              options: {
                a: "Students aged 18-25 with grade A",
                b: "Students aged 18-25 OR students with grade A",
                c: "Students aged exactly 18, 25, or with grade A",
                d: "Syntax error"
              },
              correct: "b"
            },
            {
              id: 13,
              question: "In CSS Flexbox, what does 'justify-content: space-between' do?",
              options: {
                a: "Distributes items evenly with equal space around them",
                b: "Distributes items with space only between them",
                c: "Centers all items",
                d: "Aligns items to the start"
              },
              correct: "b"
            },
            {
              id: 14,
              question: "What is the output of this C code?\n\n```c\nchar str[] = \"Hello\";\nprintf(\"%d\", sizeof(str));\n```",
              options: {
                a: "5",
                b: "6",
                c: "4",
                d: "8"
              },
              correct: "b"
            },
            {
              id: 15,
              question: "Which OOP concept is demonstrated when a single interface is used to represent different underlying data types?",
              options: {
                a: "Encapsulation",
                b: "Inheritance",
                c: "Polymorphism",
                d: "Abstraction"
              },
              correct: "c"
            },
            {
              id: 16,
              question: "What does the following SQL query return?\n\nSELECT department, COUNT(*) as emp_count FROM employees GROUP BY department HAVING COUNT(*) > 5;",
              options: {
                a: "All departments with their employee count",
                b: "Departments with more than 5 employees",
                c: "First 5 departments",
                d: "Departments with exactly 5 employees"
              },
              correct: "b"
            },
            {
              id: 17,
              question: "What is the output of this C++ code?\n\n```cpp\nint a = 10, b = 20;\nint *p1 = &a, *p2 = &b;\n*p1 = *p2;\nprintf(\"%d %d\", a, b);\n```",
              options: {
                a: "10 20",
                b: "20 10",
                c: "20 20",
                d: "10 10"
              },
              correct: "c"
            },
            {
              id: 18,
              question: "Which CSS property is used to control the stacking order of positioned elements?",
              options: {
                a: "layer",
                b: "stack-order",
                c: "z-index",
                d: "position-order"
              },
              correct: "c"
            },
            {
              id: 19,
              question: "In HTML5, which input type automatically validates email format?",
              options: {
                a: "email",
                b: "text",
                c: "mail",
                d: "validate-email"
              },
              correct: "a"
            },
            {
              id: 20,
              question: "What will this C code output?\n\n```c\nfor(int i = 0; i < 3; i++) {\n    if(i == 1) continue;\n    printf(\"%d \", i);\n}\n```",
              options: {
                a: "0 1 2",
                b: "0 2",
                c: "1 2",
                d: "0 1"
              },
              correct: "b"
            },
            {
              id: 21,
              question: "Which SQL JOIN returns all records from both tables, matching where possible?",
              options: {
                a: "INNER JOIN",
                b: "LEFT JOIN",
                c: "RIGHT JOIN",
                d: "FULL OUTER JOIN"
              },
              correct: "d"
            },
            {
              id: 22,
              question: "What is the difference between 'display: none' and 'visibility: hidden' in CSS?",
              options: {
                a: "No difference",
                b: "display: none removes element from layout, visibility: hidden keeps space",
                c: "visibility: hidden removes element from layout, display: none keeps space",
                d: "Both remove element from layout"
              },
              correct: "b"
            },
            {
              id: 23,
              question: "What is the output of this C++ code?\n\n```cpp\nclass Base {\npublic:\n    virtual void show() { cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n    void show() { cout << \"Derived\"; }\n};\nBase *b = new Derived();\nb->show();\n```",
              options: {
                a: "Base",
                b: "Derived",
                c: "Compilation error",
                d: "Runtime error"
              },
              correct: "b"
            },
            {
              id: 24,
              question: "What does this SQL subquery return?\n\nSELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);",
              options: {
                a: "All products",
                b: "Products with above average price",
                c: "The average price",
                d: "Syntax error"
              },
              correct: "b"
            },
            {
              id: 25,
              question: "What is the output of this C code?\n\n```c\nint x = 1;\nswitch(x) {\n    case 1: printf(\"One \");\n    case 2: printf(\"Two \");\n    default: printf(\"Default\");\n}\n```",
              options: {
                a: "One",
                b: "One Two",
                c: "One Two Default",
                d: "Default"
              },
              correct: "c"
            },
            {
              id: 26,
              question: "Which CSS media query targets screens with maximum width of 768px?",
              options: {
                a: "@media (max-width: 768px)",
                b: "@media screen and (width <= 768px)",
                c: "@media (screen-width: 768px)",
                d: "@media max-width: 768px"
              },
              correct: "a"
            },
            {
              id: 27,
              question: "In OOP, what does the 'protected' access modifier mean?",
              options: {
                a: "Accessible only within the same class",
                b: "Accessible within class and its subclasses",
                c: "Accessible from anywhere",
                d: "Not accessible at all"
              },
              correct: "b"
            },
            {
              id: 28,
              question: "What is the result of this C code?\n\n```c\nchar *str = \"Hello\";\nstr[0] = 'h';\nprintf(\"%s\", str);\n```",
              options: {
                a: "hello",
                b: "Hello",
                c: "Compilation error",
                d: "Undefined behavior"
              },
              correct: "d"
            },
            {
              id: 29,
              question: "Which HTML element creates a dropdown list?",
              options: {
                a: "<dropdown>",
                b: "<select>",
                c: "<list>",
                d: "<option>"
              },
              correct: "b"
            },
            {
              id: 30,
              question: "What does this SQL query do?\n\nDELETE FROM orders WHERE order_date < '2023-01-01';",
              options: {
                a: "Deletes all orders",
                b: "Deletes orders before 2023",
                c: "Deletes orders in 2023",
                d: "Updates order dates"
              },
              correct: "b"
            },
            {
              id: 31,
              question: "What is the output of this C++ code?\n\n```cpp\nint arr[3] = {10, 20, 30};\nint *p = arr;\nprintf(\"%d\", *(p + 1) + *(p + 2));\n```",
              options: {
                a: "30",
                b: "50",
                c: "60",
                d: "Compilation error"
              },
              correct: "b"
            },
            {
              id: 32,
              question: "In CSS Grid, what does 'grid-template-columns: 1fr 2fr 1fr' create?",
              options: {
                a: "Three equal columns",
                b: "Three columns: narrow, wide, narrow (1:2:1 ratio)",
                c: "Two columns",
                d: "Four columns"
              },
              correct: "b"
            },
            {
              id: 33,
              question: "What is the result of this C code with recursion?\n\n```c\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nprintf(\"%d\", factorial(4));\n```",
              options: {
                a: "10",
                b: "16",
                c: "24",
                d: "Stack overflow"
              },
              correct: "c"
            },
            {
              id: 34,
              question: "Which SQL constraint ensures a column cannot have duplicate values?",
              options: {
                a: "PRIMARY KEY",
                b: "UNIQUE",
                c: "NOT NULL",
                d: "Both A and B"
              },
              correct: "d"
            },
            {
              id: 35,
              question: "What happens with this C++ constructor chain?\n\n```cpp\nclass A {\npublic:\n    A() { cout << \"A \"; }\n};\nclass B : public A {\npublic:\n    B() { cout << \"B \"; }\n};\nB obj;\n```",
              options: {
                a: "B A",
                b: "A B",
                c: "Only B",
                d: "Compilation error"
              },
              correct: "b"
            }
          ]
        },
        exam8: { 
          title: "Technical Mock Exam 8 - C/C++, SQL, HTML, CSS, OOP (Intermediate & Tricky)",
          questions: [
            {
              id: 1,
              question: "In C++, which of the following correctly allocates a dynamic array of 10 integers?",
              options: {
                a: "int *arr = new int(10);",
                b: "int arr[10];",
                c: "int *arr = new int[10];",
                d: "int *arr = malloc(10 * sizeof(int));"
              },
              correct: "c"
            },
            {
              id: 2,
              question: "What will be the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << x++ << ' ' << ++x;\n    return 0;\n}",
              options: {
                a: "5 6",
                b: "5 7",
                c: "6 7",
                d: "6 6"
              },
              correct: "b"
            },
            {
              id: 3,
              question: "Flowchart Question:\n\n   [Start]\n      |\n   x = 2\n      |\n   y = x * 3\n      |\n   IF y > 5?\n    /   \\\n  Yes   No\n  |      |\nPrint y  Print x\n\nWhat will be printed?",
              options: {
                a: "2",
                b: "6",
                c: "0",
                d: "Error"
              },
              correct: "b"
            },
            {
              id: 4,
              question: "Which SQL statement will return all employees whose salary is greater than the average salary?",
              options: {
                a: "SELECT * FROM Employees WHERE salary > AVG(salary);",
                b: "SELECT * FROM Employees HAVING salary > AVG(salary);",
                c: "SELECT * FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);",
                d: "SELECT * FROM Employees GROUP BY salary > AVG(salary);"
              },
              correct: "c"
            },
            {
              id: 5,
              question: "In CSS, which selector targets only <p> elements inside a <div> with the class 'content'?",
              options: {
                a: "div p.content",
                b: ".content p",
                c: "p .content",
                d: "div.content p"
              },
              correct: "d"
            },
            {
              id: 6,
              question: "Pseudocode Question:\n\nSET total = 0\nFOR i = 1 TO 4\n   total = total + i\nNEXT i\nPRINT total\n\nWhat is printed?",
              options: {
                a: "4",
                b: "6",
                c: "10",
                d: "15"
              },
              correct: "c"
            },
            {
              id: 7,
              question: "In C++, which concept allows a derived class to provide a specific implementation of a virtual function defined in its base class?",
              options: {
                a: "Encapsulation",
                b: "Overloading",
                c: "Overriding",
                d: "Abstraction"
              },
              correct: "c"
            },
            {
              id: 8,
              question: "What will be the output?\n\n#include <iostream>\nusing namespace std;\nint main(){\n    int arr[] = {1,2,3};\n    cout << *(arr + 1);\n}",
              options: {
                a: "1",
                b: "2",
                c: "3",
                d: "Garbage value"
              },
              correct: "b"
            },
            {
              id: 9,
              question: "Flowchart Question:\n\n   [Start]\n      |\n   a = 10, b = 5\n      |\n   IF a < b ?\n    /   \\\n  Yes   No\n  |      |\nPrint a  Print b\n\nWhat is printed?",
              options: {
                a: "10",
                b: "5",
                c: "15",
                d: "Error"
              },
              correct: "b"
            },
            {
              id: 10,
              question: "In HTML5, which tag is semantic and best represents a self-contained piece of content?",
              options: {
                a: "<div>",
                b: "<section>",
                c: "<article>",
                d: "<span>"
              },
              correct: "c"
            },
            {
              id: 11,
              question: "Pseudocode Question:\n\nREAD num\nIF num % 2 == 0 THEN\n   PRINT 'Even'\nELSE\n   PRINT 'Odd'\n\nIf num = 7, what is printed?",
              options: {
                a: "Even",
                b: "Odd",
                c: "Error",
                d: "Nothing"
              },
              correct: "b"
            },
            {
              id: 12,
              question: "Which CSS property is used to control the order of flex items?",
              options: {
                a: "z-index",
                b: "order",
                c: "flex-order",
                d: "align-order"
              },
              correct: "b"
            },
            {
              id: 13,
              question: "What is the output?\n\n#include <iostream>\nusing namespace std;\nint main(){\n    int a = 3;\n    int b = ++a * 2;\n    cout << b;\n}",
              options: {
                a: "6",
                b: "8",
                c: "7",
                d: "Compile error"
              },
              correct: "b"
            },
            {
              id: 14,
              question: "In SQL, which JOIN returns all rows from both tables, matching rows where possible?",
              options: {
                a: "INNER JOIN",
                b: "LEFT JOIN",
                c: "RIGHT JOIN",
                d: "FULL OUTER JOIN"
              },
              correct: "d"
            },
            {
              id: 15,
              question: "Flowchart Question:\n\n   [Start]\n      |\n   i = 1\n      |\n   WHILE i < 4\n     PRINT i\n     i = i + 1\n\nWhat is printed?",
              options: {
                a: "1 2 3",
                b: "1 2",
                c: "1 2 3 4",
                d: "0 1 2"
              },
              correct: "a"
            },
            {
              id: 16,
              question: "In C++, which of the following will cause a memory leak?",
              options: {
                a: "Using delete[] on an array allocated with new[]",
                b: "Using delete on a pointer allocated with new[]",
                c: "Using free on a pointer allocated with malloc",
                d: "Returning a pointer to a local variable"
              },
              correct: "b"
            },
            {
              id: 17,
              question: "Which CSS property is NOT inherited by default?",
              options: {
                a: "color",
                b: "font-family",
                c: "margin",
                d: "line-height"
              },
              correct: "c"
            },
            {
              id: 18,
              question: "In SQL, which operator checks for a value within a list?",
              options: {
                a: "BETWEEN",
                b: "IN",
                c: "ANY",
                d: "ALL"
              },
              correct: "b"
            },
            {
              id: 19,
              question: "What will be the output?\n\n#include <iostream>\nusing namespace std;\nint main(){\n    string s = \"Hello\";\n    s[0] = 'J';\n    cout << s;\n}",
              options: {
                a: "Hello",
                b: "Jello",
                c: "JHello",
                d: "Compile error"
              },
              correct: "b"
            },
            {
              id: 20,
              question: "Which OOP principle is demonstrated when different classes have methods with the same name but different implementations?",
              options: {
                a: "Encapsulation",
                b: "Polymorphism",
                c: "Abstraction",
                d: "Inheritance"
              },
              correct: "b"
            },
            {
              id: 21,
              question: "Pseudocode Question:\n\nSET a = 5, b = 0\nIF b == 0 THEN\n   PRINT 'Error'\nELSE\n   PRINT a / b\n\nWhat is printed?",
              options: {
                a: "5",
                b: "Error",
                c: "0",
                d: "Compile error"
              },
              correct: "b"
            },
            {
              id: 22,
              question: "In SQL, what will this query return?\n\nSELECT COUNT(*) FROM Orders WHERE amount > 500;",
              options: {
                a: "Number of all orders",
                b: "Number of orders with amount > 500",
                c: "Sum of amounts > 500",
                d: "Error"
              },
              correct: "b"
            },
            {
              id: 23,
              question: "In HTML, which attribute specifies the URL of the page the form data is sent to?",
              options: {
                a: "method",
                b: "action",
                c: "target",
                d: "href"
              },
              correct: "b"
            },
            {
              id: 24,
              question: "In CSS, which value of 'position' places the element relative to its nearest positioned ancestor?",
              options: {
                a: "absolute",
                b: "fixed",
                c: "relative",
                d: "sticky"
              },
              correct: "a"
            },
            {
              id: 25,
              question: "Which keyword is used in C++ to prevent a class from being inherited?",
              options: {
                a: "private",
                b: "sealed",
                c: "final",
                d: "static"
              },
              correct: "c"
            },
            {
              id: 26,
              question: "What is the result of: SELECT 10/4;",
              options: {
                a: "2",
                b: "2.5",
                c: "Depends on DBMS",
                d: "Error"
              },
              correct: "c"
            },
            {
              id: 27,
              question: "What will the following C++ code print?\n\n#include <iostream>\nusing namespace std;\nint main(){\n    int arr[3] = {1};\n    cout << arr[1];\n}",
              options: {
                a: "0",
                b: "1",
                c: "Garbage value",
                d: "Compile error"
              },
              correct: "a"
            },
            {
              id: 28,
              question: "In HTML, what does the <label> tag do when used with a form control?",
              options: {
                a: "Adds a placeholder",
                b: "Associates text with a form control",
                c: "Sets the input type",
                d: "Submits the form"
              },
              correct: "b"
            },
            {
              id: 29,
              question: "In CSS, which pseudo-class is used to style an element when the mouse pointer is over it?",
              options: {
                a: ":hover",
                b: ":focus",
                c: ":active",
                d: ":visited"
              },
              correct: "a"
            },
            {
              id: 30,
              question: "In SQL, which command removes all rows from a table without logging individual row deletions?",
              options: {
                a: "DELETE",
                b: "DROP",
                c: "TRUNCATE",
                d: "REMOVE"
              },
              correct: "c"
            },
            {
              id: 31,
              question: "What will be printed?\n\n#include <iostream>\nusing namespace std;\nint main(){\n    int a = 2;\n    switch(a){\n        case 1: cout << 1;\n        case 2: cout << 2;\n        default: cout << 3;\n    }\n}",
              options: {
                a: "2",
                b: "23",
                c: "3",
                d: "Compile error"
              },
              correct: "b"
            },
            {
              id: 32,
              question: "Which SQL keyword is used to sort the result set?",
              options: {
                a: "SORT BY",
                b: "ORDER BY",
                c: "GROUP BY",
                d: "ALIGN BY"
              },
              correct: "b"
            },
            {
              id: 33,
              question: "In CSS Grid, which property specifies the number and size of columns?",
              options: {
                a: "grid-template-columns",
                b: "grid-columns",
                c: "columns",
                d: "grid-size-columns"
              },
              correct: "a"
            },
            {
              id: 34,
              question: "In C++, what will be the output?\n\n#include <iostream>\nusing namespace std;\nint main(){\n    cout << (5 == 5 ? \"Equal\" : \"Not Equal\");\n}",
              options: {
                a: "Equal",
                b: "Not Equal",
                c: "1",
                d: "0"
              },
              correct: "a"
            },
            {
              id: 35,
              question: "Which OOP concept hides the internal state of an object and only exposes methods to interact with it?",
              options: {
                a: "Encapsulation",
                b: "Polymorphism",
                c: "Inheritance",
                d: "Abstraction"
              },
              correct: "a"
            }
          ]
        }
        
      }  
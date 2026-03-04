export type Paradigm = 'Multi-paradigm' | 'Object-oriented' | 'Functional' | 'Procedural';
export type Typing = 'Static Strong' | 'Static Weak' | 'Dynamic Strong' | 'Dynamic Weak';
export type Level = 'Low-level' | 'High-level';

export interface ProgrammingLanguage {
  id: string;
  name: string;
  releaseYear: number;
  paradigm: Paradigm;
  typing: Typing;
  level: Level;
  isCompiled: boolean;
  snippets: string[];
}

export type BasicProgrammingLanguage = Omit<ProgrammingLanguage, 'snippets'>;

export interface LanguageData extends BasicProgrammingLanguage {
  snippets: [string[], string[], string[]];
}

export const LANGUAGES: LanguageData[] = [
  {
    id: 'python',
    name: 'Python',
    releaseYear: 1991,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `squared_evens = [x**2 for x in range(10) if (lambda y: y % 2 == 0)(x)]`,
        `def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b`,
        `from functools import reduce\nres = reduce(lambda x, y: x * y, [1, 2, 3, 4, 5])`
      ],
      [
        `class Dog:\n    def __init__(self, name):\n        self.name = name`,
        `try:\n    with open("file.txt") as f:\n        data = f.read()\nexcept FileNotFoundError:\n    pass`,
        `import requests\nresp = requests.get('https://api.github.com')\nprint(resp.json())`
      ],
      [
        `print("Hello, World!")`,
        `name = input("Enter name: ")\nprint(f"Hello {name}")`,
        `def greet(name):\n    print("Hello", name)`
      ]
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    releaseYear: 1995,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Weak',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `Function.prototype.bind = function(ctx) {\n  const fn = this;\n  return function(...args) { return fn.apply(ctx, args); };\n};`,
        `const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);`,
        `const debounce = (fn, ms) => {\n  let id;\n  return (...args) => {\n    clearTimeout(id);\n    id = setTimeout(() => fn(...args), ms);\n  };\n};`
      ],
      [
        `async function getData() {\n  const res = await fetch('/api/data');\n  return await res.json();\n}`,
        `const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => console.log(entry.isIntersecting));\n});`,
        `document.getElementById("btn").addEventListener("click", () => {\n  alert("Clicked!");\n});`
      ],
      [
        `console.log("Hello, World!");`,
        `const name = "Alice";\nconsole.log(\`Hello \${name}\`);`,
        `function greet() {\n  console.log("Hi");\n}`
      ]
    ]
  },
  {
    id: 'java',
    name: 'Java',
    releaseYear: 1995,
    paradigm: 'Object-oriented',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `List<String> filtered = list.stream()\n    .filter(s -> s.startsWith("A"))\n    .collect(Collectors.toList());`,
        `public <T extends Comparable<T>> int countGreaterThan(T[] array, T elem) {\n    int count = 0;\n    for (T e : array)\n        if (e.compareTo(elem) > 0) ++count;\n    return count;\n}`,
        `CompletableFuture.supplyAsync(() -> "Hello")\n    .thenApply(s -> s + " World")\n    .thenAccept(System.out::println);`
      ],
      [
        `@Override\npublic void doSomething() {\n    super.doSomething();\n}`,
        `try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n} catch (IOException e) { e.printStackTrace(); }`,
        `public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) instance = new Singleton();\n        return instance;\n    }\n}`
      ],
      [
        `System.out.println("Hello, World!");`,
        `Scanner scanner = new Scanner(System.in);\nString name = scanner.nextLine();\nSystem.out.println("Hello " + name);`,
        `public static void main(String[] args) {\n    System.out.println("Hello");\n}`
      ]
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    releaseYear: 2015,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'Low-level',
    isCompiled: true,
    snippets: [
      [
        `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}`,
        `use std::sync::{Arc, Mutex};\nuse std::thread;\nlet counter = Arc::new(Mutex::new(0));\nlet mut handles = vec![];`,
        `macro_rules! say_hello {\n    () => {\n        println!("Hello!");\n    };\n}`
      ],
      [
        `match coin {\n    Coin::Penny => 1,\n    Coin::Quarter => 25,\n}`,
        `impl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}`,
        `let Some(value) = my_option else { return };\nprintln!("Value is {}", value);`
      ],
      [
        `println!("Hello, World!");`,
        `let age = 42;\nprintln!("I am {} years old", age);`,
        `fn main() {\n    println!("Hello");\n}`
      ]
    ]
  },
  {
    id: 'c',
    name: 'C',
    releaseYear: 1972,
    paradigm: 'Procedural',
    typing: 'Static Weak',
    level: 'Low-level',
    isCompiled: true,
    snippets: [
      [
        `void (*func_ptr)(int) = &my_function;\nint *arr = (int*)malloc(5 * sizeof(int));`,
        `#define MACRO_MAX(a, b) ((a) > (b) ? (a) : (b))\nint m = MACRO_MAX(x++, y++); // Side effects!`,
        `struct node {\n    int data;\n    struct node *next;\n};\nvoid insert(struct node **head, int data);`
      ],
      [
        `typedef struct {\n    int x;\n    int y;\n} Point;`,
        `FILE *fp = fopen("file.txt", "r");\nif (fp != NULL) {\n    fclose(fp);\n}`,
        `for (int i = 0; i < 10; i++) {\n    printf("%d\\n", arr[i]);\n}`
      ],
      [
        `int main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
        `char str[] = "Hello";\nprintf("%s\\n", str);`,
        `#include <stdio.h>\nint main() { return 0; }`
      ]
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    releaseYear: 2000,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `Func<int, bool> isEven = x => x % 2 == 0;\nvar evens = numbers.Where(isEven).ToList();`,
        `public delegate void Notify();  // delegate\npublic event Notify ProcessCompleted; // event`,
        `var query = from s in students\n            where s.Age > 18\n            select s.Name;`
      ],
      [
        `public string Name { get; set; }\npublic int Age { get; private set; }`,
        `public async Task<int> FetchDataAsync() {\n    await Task.Delay(1000);\n    return 42;\n}`,
        `using (StreamReader sr = new StreamReader("TestFile.txt")) {\n    string line;\n    while ((line = sr.ReadLine()) != null) {\n        Console.WriteLine(line);\n    }\n}`
      ],
      [
        `Console.WriteLine("Hello, World!");`,
        `string name = "User";\nConsole.WriteLine($"Hello {name}");`,
        `static void Main(string[] args) {\n    Console.WriteLine("Hi");\n}`
      ]
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    releaseYear: 1995,
    paradigm: 'Object-oriented',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `def method_missing(m, *args, &block)\n  puts "Called missing method: #{m}"\nend`,
        `class String\n  def is_palindrome?\n    self == self.reverse\n  end\nend`,
        `proc = Proc.new { |x| x * 2 }\nlambda_func = ->(x) { x * 2 }\nres = [1, 2, 3].map(&lambda_func)`
      ],
      [
        `5.times do |i|\n  puts "This is loop number #{i}"\nend`,
        `File.open("test.txt", "w") do |file|\n  file.write("Hello")\nend`,
        `class Person\n  attr_accessor :name\n  def initialize(name)\n    @name = name\n  end\nend`
      ],
      [
        `puts "Hello, World!"`,
        `name = "Alice"\nputs "Hello #{name}"`,
        `print "Hello, World!"`
      ]
    ]
  },
  {
    id: 'haskell',
    name: 'Haskell',
    releaseYear: 1990,
    paradigm: 'Functional',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `main = getLine >>= \\name -> putStrLn ("Hello, " ++ name)`,
        `fib :: [Integer]\nfib = 0 : 1 : zipWith (+) fib (tail fib)`,
        `qsort [] = []\nqsort (p:xs) = qsort [x | x<-xs, x<p] ++ [p] ++ qsort [x | x<-xs, x>=p]`
      ],
      [
        `factorial :: Integer -> Integer\nfactorial 0 = 1\nfactorial n | n > 0 = n * factorial (n - 1)`,
        `data Tree a = Empty | Node a (Tree a) (Tree a)\n  deriving (Show, Eq)`,
        `square :: Int -> Int\nsquare x = x * x\nlist = map square [1..5]`
      ],
      [
        `putStrLn "Hello, World!"`,
        `main :: IO ()\nmain = putStrLn "Hi"`,
        `greeting = "Hello" ++ " World"\nmain = putStrLn greeting`
      ]
    ]
  },
  {
    id: 'go',
    name: 'Go',
    releaseYear: 2009,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `ch := make(chan int)\ngo func() {\n    ch <- 42\n}()\nvalue := <-ch`,
        `type Interface interface {\n    Len() int\n    Less(i, j int) bool\n    Swap(i, j int)\n}`,
        `select {\ncase msg1 := <-c1:\n    fmt.Println("received", msg1)\ncase msg2 := <-c2:\n    fmt.Println("received", msg2)\n}`
      ],
      [
        `if err != nil {\n    return nil, err\n}`,
        `func add(x int, y int) int {\n    return x + y\n}`,
        `defer func() {\n    if r := recover(); r != nil {\n        fmt.Println("Recovered", r)\n    }\n}()`
      ],
      [
        `fmt.Println("Hello, World!")`,
        `func main() {\n    fmt.Println("Hi")\n}`,
        `var name string = "Alice"\nfmt.Println(name)`
      ]
    ]
  },
  {
    id: 'elixir',
    name: 'Elixir',
    releaseYear: 2012,
    paradigm: 'Functional',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `"concurrency" |> String.graphemes() |> Enum.frequencies()`,
        `defmacro unless(clause, do: expression) do\n  quote do\n    if(!unquote(clause), do: unquote(expression))\n  end\nend`,
        `pid = spawn(fn -> receive do {:hello, msg} -> IO.puts msg end end)\nsend(pid, {:hello, "world"})`
      ],
      [
        `def handle_result({:ok, value}), do: IO.puts(value)\ndef handle_result({:error, _reason}), do: IO.puts("Error")`,
        `Enum.map([1, 2, 3], fn x -> x * 2 end)`,
        `defmodule Math do\n  def sum(a, b), do: a + b\nend`
      ],
      [
        `IO.puts "Hello, World!"`,
        `name = "Elixir"\nIO.puts "Hello #{name}"`,
        `IO.inspect("Hello")`
      ]
    ]
  },
  {
    id: 'lua',
    name: 'Lua',
    releaseYear: 1993,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Weak',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `local mt = { __add = function(a, b) return a.value + b.value end }\nsetmetatable(obj, mt)`,
        `function pairsByKeys (t, f)\n  local a = {}\n  for n in pairs(t) do table.insert(a, n) end\n  table.sort(a, f)\n  local i = 0\n  return function () i = i + 1; if a[i] == nil then return nil else return a[i], t[a[i]] end end\nend`,
        `co = coroutine.create(function ()\n  for i=1,10 do\n    coroutine.yield(i)\n  end\nend)`
      ],
      [
        `local player = {\n  x = 100,\n  y = 200,\n  name = "Hero"\n}`,
        `for i, v in ipairs(list) do\n  print(i, v)\nend`,
        `function factorial(n)\n  if n == 0 then return 1 else return n * factorial(n-1) end\nend`
      ],
      [
        `print("Hello, World!")`,
        `name = "Player"\nprint("Hello " .. name)`,
        `io.write("Hello, World!\\n")`
      ]
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    releaseYear: 1985,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'Low-level',
    isCompiled: true,
    snippets: [
      [
        `template <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}`,
        `std::unique_ptr<int> p1 = std::make_unique<int>(42);\nstd::shared_ptr<int> p2 = std::make_shared<int>(42);`,
        `class Base { virtual void foo() = 0; };\nclass Derived : public Base { void foo() override {} };`
      ],
      [
        `std::vector<int> numbers = {1, 2, 3, 4, 5};\nfor(int n : numbers) {\n    std::cout << n << '\\n';\n}`,
        `try {\n    throw std::runtime_error("Error");\n} catch (const std::exception& e) {\n    std::cout << e.what() << '\\n';\n}`,
        `class MyClass {\npublic:\n    MyClass() { std::cout << "Constructor\\n"; }\n    ~MyClass() { std::cout << "Destructor\\n"; }\n};`
      ],
      [
        `std::cout << "Hello, World!" << std::endl;`,
        `int main() {\n    std::cout << "Hi\\n";\n    return 0;\n}`,
        `std::string name = "Bob";\nstd::cout << name;`
      ]
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    releaseYear: 1995,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Weak',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `public function __construct(private string $name) {}\n\npublic function __toString(): string {\n    return $this->name;\n}`,
        `$closure = fn($x, $y) => $x + $y;\necho $closure(1, 2);`,
        `class ActiveRecord {\n    public function __call($method, $args) {\n        if (str_starts_with($method, 'findBy')) { ... }\n    }\n}`
      ],
      [
        `foreach ($users as $key => $value) {\n    echo $key . ": " . $value . "\\n";\n}`,
        `if (isset($_POST['submit'])) {\n    $name = htmlspecialchars($_POST['name']);\n}`,
        `try {\n    $pdo = new PDO($dsn, $user, $pass);\n} catch (PDOException $e) {\n    echo $e->getMessage();\n}`
      ],
      [
        `echo "Hello, World!";`,
        `print("Hello, World!");`,
        `$name = "Alice";\necho "Hello $name";`
      ]
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    releaseYear: 2012,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `type Readonly<T> = {\n    readonly [P in keyof T]: T[P];\n};`,
        `function identity<T>(arg: T): T {\n    return arg;\n}`,
        `type ExtractType<T> = T extends Promise<infer U> ? U : never;`
      ],
      [
        `interface User {\n    id: number;\n    name: string;\n    email?: string;\n}`,
        `enum Direction {\n    Up,\n    Down,\n    Left,\n    Right\n}`,
        `class Point {\n    x: number;\n    y: number;\n    constructor(x: number, y: number) {\n        this.x = x;\n        this.y = y;\n    }\n}`
      ],
      [
        `const message: string = "Hello, World!";\nconsole.log(message);`,
        `let age: number = 30;\nconsole.log(age);`,
        `console.log("Hello, TypeScript!");`
      ]
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    releaseYear: 2014,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `guard let unwrappedValue = optionalValue else {\n    return\n}`,
        `protocol Identifiable {\n    associatedtype ID\n    var id: ID { get }\n}`,
        `extension Int {\n    var squared: Int { return self * self }\n}`
      ],
      [
        `struct Player: Equatable {\n    var name: String\n    var score: Int\n}`,
        `if let unwrapped = optionalString {\n    print(unwrapped)\n}`,
        `let mapped = numbers.map { $0 * 2 }.filter { $0 > 10 }`
      ],
      [
        `print("Hello, World!")`,
        `var name = "Swift"\nprint("Hello, \\(name)!")`,
        `let message = "Hello"\nprint(message)`
      ]
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    releaseYear: 2011,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `GlobalScope.launch {\n    delay(1000L)\n    println("World!")\n}`,
        `inline fun <reified T> membersOf() = T::class.members`,
        `suspend fun fetchFromNetwork(): String = withContext(Dispatchers.IO) {\n    // fetch data\n}`
      ],
      [
        `data class User(val name: String, val age: Int)\nval updatedUser = user.copy(age = 30)`,
        `val max = if (a > b) a else b`,
        `fun String.removeFirstLastChar(): String =  this.substring(1, this.length - 1)`
      ],
      [
        `println("Hello, World!")`,
        `val name = "Kotlin"\nprintln("Hello, $name!")`,
        `fun main() {\n    println("Hi")\n}`
      ]
    ]
  },
  {
    id: 'r',
    name: 'R',
    releaseYear: 1993,
    paradigm: 'Functional',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `result <- lapply(my_list, function(x) x^2)\nfiltered <- result[result > 10]`,
        `lm_fit <- lm(mpg ~ wt + hp, data = mtcars)\nsummary(lm_fit)`,
        `ggplot(data, aes(x=weight, y=height, color=gender)) +\n  geom_point() + geom_smooth(method="lm")`
      ],
      [
        `df <- data.frame(\n  Name = c("Alice", "Bob"),\n  Age = c(25, 30)\n)`,
        `matrix_A <- matrix(1:9, nrow = 3, ncol = 3)`,
        `filtered_df <- subset(df, Age > 20)`
      ],
      [
        `print("Hello, World!")`,
        `cat("Hello, World!\\n")`,
        `msg <- "Hello"\nprint(msg)`
      ]
    ]
  },
  {
    id: 'brainfuck',
    name: 'Brainfuck',
    releaseYear: 1993,
    paradigm: 'Procedural',
    typing: 'Static Weak',
    level: 'Low-level',
    isCompiled: true,
    snippets: [
      [
        `++[>++<-]>[<++++>-]`,
        `[->+>+<<]>>[-<<+>>]`,
        `>>+>+>><<<<<[-[->>+<]+>>]`
      ],
      [
        `,[.,]`,
        `++++++++[>++++<-]>+.`,
        `[-]`
      ],
      [
        `-[------->+<]-.-[->+++++<]>++.+++++++..+++.[--->+<]>-----.---[->+++<]>.-[--->+<]>---.+++.------.--------.`,
        `+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+.`,
        `++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.`
      ]
    ]
  },
  {
    id: 'fortran',
    name: 'Fortran',
    releaseYear: 1957,
    paradigm: 'Procedural',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `real, dimension(10,10) :: A, B, C\nC = matmul(A, B)`,
        `integer :: i\nreal :: sum\nsum = 0.0\ndo i = 1, 100\n  sum = sum + 1.0/real(i**2)\nend do`,
        `type :: Person\n  character(len=20) :: name\n  integer :: age\nend type Person`
      ],
      [
        `program circle_area\n  real :: radius, area\n  radius = 5.0\n  area = 3.14159 * radius**2\nend program`,
        `subroutine swap(x, y)\n  real, intent(inout) :: x, y\n  real :: temp\n  temp = x\n  x = y\n  y = temp\nend subroutine swap`,
        `if (score >= 90) then\n  print *, "Grade: A"\nelse\n  print *, "Grade: B"\nend if`
      ],
      [
        `print *, "Hello, World!"`,
        `write(*,*) 'Hello, World!'`,
        `program hello\n  print *, "Hello!"\nend program hello`
      ]
    ]
  },
  {
    id: 'cobol',
    name: 'COBOL',
    releaseYear: 1959,
    paradigm: 'Procedural',
    typing: 'Static Weak',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO-WORLD.\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-NUM1 PIC 9(4) VALUE 10.\n01 WS-NUM2 PIC 9(4) VALUE 10.\n01 WS-SUM PIC 9(5).`,
        `PERFORM VARYING WS-COUNTER FROM 1 BY 1 UNTIL WS-COUNTER > 10\n  COMPUTE WS-TOTAL = WS-TOTAL + WS-COUNTER\nEND-PERFORM.`,
        `READ EMPLOYEE-FILE NEXT RECORD\n  AT END SET END-OF-FILE TO TRUE\nEND-READ.`
      ],
      [
        `ADD WS-NUM1 TO WS-NUM2 GIVING WS-RESULT.\nDISPLAY "Result: " WS-RESULT.`,
        `IF WS-AGE > 18\n  DISPLAY "Adult"\nELSE\n  DISPLAY "Minor"\nEND-IF.`,
        `MOVE "JOHN DOE" TO WS-NAME.\nMOVE 25 TO WS-AGE.`
      ],
      [
        `DISPLAY "HELLO, WORLD!".`,
        `DISPLAY 'Hello, World!'.`,
        `PROCEDURE DIVISION.\n  DISPLAY "HELLO".\n  STOP RUN.`
      ]
    ]
  },
  {
    id: 'lisp',
    name: 'Lisp',
    releaseYear: 1958,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `(defmacro unless (condition &body body)\n  \`(if (not ,condition) (progn ,@body)))`,
        `(defun factorial (n)\n  (if (<= n 1)\n      1\n      (* n (factorial (- n 1)))))`,
        `(mapcar #'(lambda (x) (* x x)) '(1 2 3 4 5))`
      ],
      [
        `(setq my-list '(a b c d))\n(car (cdr my-list))`,
        `(defun greet (name)\n  (format t "Hello, ~a!" name))`,
        `(let ((x 10)\n      (y 20))\n  (+ x y))`
      ],
      [
        `(print "Hello, World!")`,
        `(format t "Hello, World!")`,
        `(write-line "Hello, World!")`
      ]
    ]
  },
  {
    id: 'assembly',
    name: 'Assembly (x86)',
    releaseYear: 1978,
    paradigm: 'Procedural',
    typing: 'Static Weak',
    level: 'Low-level',
    isCompiled: true,
    snippets: [
      [
        `push ebp\nmov ebp, esp\nsub esp, 16\nmov DWORD PTR [ebp-4], 10`,
        `mov eax, [ebp+8]\nadd eax, [ebp+12]\npop ebp\nret`,
        `cmp eax, 0\nje .end_loop\nadd ebx, 1\njmp .start_loop`
      ],
      [
        `section .data\n  msg db 'Hello', 0xA\n  len equ $ - msg`,
        `mov eax, 1\nmov ebx, 0\nint 0x80`,
        `mov eax, 3\nmov ebx, 0\nmov ecx, buffer\nmov edx, 100\nint 0x80`
      ],
      [
        `mov edx, len\nmov ecx, msg\nmov ebx, 1\nmov eax, 4\nint 0x80`,
        `syscall ; write(1, msg, len)`,
        `call printf`
      ]
    ]
  },
  {
    id: 'pascal',
    name: 'Pascal',
    releaseYear: 1970,
    paradigm: 'Procedural',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `type\n  PNode = ^TNode;\n  TNode = record\n    Data: Integer;\n    Next: PNode;\n  end;`,
        `procedure Swap(var A, B: Integer);\nvar Temp: Integer;\nbegin\n  Temp := A; A := B; B := Temp;\nend;`,
        `function Factorial(N: Integer): Integer;\nbegin\n  if N <= 0 then Factorial := 1\n  else Factorial := N * Factorial(N - 1);\nend;`
      ],
      [
        `for I := 1 to 10 do\nbegin\n  Sum := Sum + I;\nend;`,
        `if Score >= 90 then\n  WriteLn('Grade A')\nelse\n  WriteLn('Grade B');`,
        `var\n  Numbers: array[1..5] of Integer;`
      ],
      [
        `WriteLn('Hello, World!');`,
        `Write('Hello, World!');`,
        `program Hello;\nbegin\n  WriteLn('Hello!');\nend.`
      ]
    ]
  },
  {
    id: 'bash',
    name: 'Bash',
    releaseYear: 1989,
    paradigm: 'Procedural',
    typing: 'Dynamic Weak',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `find . -type f -name "*.txt" -exec sed -i 's/foo/bar/g' {} +`,
        `ps aux | grep node | awk '{print $2}' | xargs kill -9`,
        `if [[ "$string" =~ ^[0-9]+$ ]]; then\n  echo "It's a number"\nfi`
      ],
      [
        `for FILE in *; do\n  echo "Processing $FILE"\ndone`,
        `if [ -f "$FILE" ]; then\n  echo "$FILE exists."\nfi`,
        `greet() {\n  echo "Hello, $1"\n}\ngreet "Admin"`
      ],
      [
        `echo "Hello, World!"`,
        `printf "Hello, World!\\n"`,
        `#!/bin/bash\necho "Hello"`
      ]
    ]
  },
  {
    id: 'prolog',
    name: 'Prolog',
    releaseYear: 1972,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      [
        `ancestor(X, Y) :- parent(X, Y).\nancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).`,
        `factorial(0, 1).\nfactorial(N, F) :- N > 0, N1 is N - 1, factorial(N1, F1), F is N * F1.`,
        `append([], L, L).\nappend([H|T], L2, [H|L3]) :- append(T, L2, L3).`
      ],
      [
        `loves(romeo, juliet).\nloves(juliet, romeo).`,
        `sibling(X, Y) :- parent(Z, X), parent(Z, Y), X \\= Y.`,
        `male(albert).\nfemale(alice).`
      ],
      [
        `write('Hello, World!').`,
        `?- write('Hello, World!').`,
        `hello :- write('Hello, World!').`
      ]
    ]
  },
  {
    id: 'scala',
    name: 'Scala',
    releaseYear: 2004,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `implicit def intToString(x: Int): String = x.toString`,
        `val futures = Future.sequence(listOfFutures)\nfutures.onComplete {\n  case Success(res) => println(res)\n}`,
        `case class Person(name: String, age: Int)\nval p = Person("Alice", 25)`
      ],
      [
        `val evens = numbers.filter(_ % 2 == 0).map(_ * 2)`,
        `def add(a: Int, b: Int): Int = a + b`,
        `object Main extends App {\n  println("Starting...")\n}`
      ],
      [
        `println("Hello, World!")`,
        `Console.println("Hello, World!")`,
        `print("Hello, World!")`
      ]
    ]
  },
  {
    id: 'ada',
    name: 'Ada',
    releaseYear: 1980,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `task body Worker is\nbegin\n  accept Start;\nend Worker;`,
        `type Day is (Mon, Tue, Wed, Thu, Fri, Sat, Sun);`,
        `pragma Assert (X > 0);`
      ],
      [
        `procedure Swap(A, B : in out Integer) is\n  Temp : Integer := A;\nbegin\n  A := B;\n  B := Temp;\nend Swap;`,
        `for I in 1 .. 10 loop\n  Put_Line(Integer'Image(I));\nend loop;`,
        `if X > 0 then\n  Put_Line("Positive");\nend if;`
      ],
      [
        `Put_Line("Hello, World!");`,
        `with Ada.Text_IO;\nprocedure Hello is\nbegin\n  Ada.Text_IO.Put_Line("Hello");\nend Hello;`,
        `Put("Hello, World!");`
      ]
    ]
  },
  {
    id: 'erlang',
    name: 'Erlang',
    releaseYear: 1986,
    paradigm: 'Functional',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `loop(State) ->\n  receive\n    {msg, Pid} -> Pid ! ack, loop(State)\n  end.`,
        `-behavior(gen_server).`,
        `spawn(fun() -> worker() end).`
      ],
      [
        `fac(0) -> 1;\nfac(N) when N > 0 -> N * fac(N-1).`,
        `[X*2 || X <- [1,2,3,4], X rem 2 == 0].`,
        `[{Key, Value} | Rest] = List.`
      ],
      [
        `io:format("Hello, World!~n").`,
        `io:fwrite("Hello, World!").`,
        `-module(hello).\n-export([start/0]).`
      ]
    ]
  },
  {
    id: 'julia',
    name: 'Julia',
    releaseYear: 2012,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `macro assert(ex)\n  return :( $ex ? nothing : throw(AssertionError($(string(ex)))) )\nend`,
        `f(x::Int) = x^2\nf(x::Float64) = x^2`,
        `struct Point{T <: Real}\n  x::T\n  y::T\nend`
      ],
      [
        `filtered = filter(x -> x % 2 == 0, 1:10)`,
        `for i in 1:10\n  println(i)\nend`,
        `Dict("A" => 1, "B" => 2)`
      ],
      [
        `println("Hello, World!")`,
        `print("Hello, World!")`,
        `display("Hello, World!")`
      ]
    ]
  },
  {
    id: 'fsharp',
    name: 'F#',
    releaseYear: 2005,
    paradigm: 'Functional',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `let rec fib n = if n < 2 then n else fib(n-1) + fib(n-2)`,
        `type Shape =\n  | Circle of float\n  | Rectangle of float * float`,
        `let add x y = x + y\nlet add5 = add 5`
      ],
      [
        `[1..10] |> List.filter (fun x -> x % 2 = 0)`,
        `let square x = x * x`,
        `match list with\n| [] -> 0\n| head::tail -> head`
      ],
      [
        `printfn "Hello, World!"`,
        `System.Console.WriteLine("Hello, World!")`,
        `printf "Hello, World!"`
      ]
    ]
  },
  {
    id: 'nim',
    name: 'Nim',
    releaseYear: 2008,
    paradigm: 'Multi-paradigm',
    typing: 'Static Strong',
    level: 'High-level',
    isCompiled: true,
    snippets: [
      [
        `macro debug(n: typed): untyped =\n  result = newCall("echo", toStrLit(n), newStrLitNode(": "), n)`,
        `proc swap[T](a, b: var T) =\n  let tmp = a\n  a = b\n  b = tmp`,
        `type Person = object\n  name: string\n  age: int`
      ],
      [
        `for i in 1..10:\n  echo i`,
        `if x > 0:\n  echo "positive"`,
        `let squares = lc[x*x | (x <- 1..10), int]`
      ],
      [
        `echo "Hello, World!"`,
        `stdout.write("Hello, World!\\n")`,
        `print("Hello, World!")`
      ]
    ]
  }
];
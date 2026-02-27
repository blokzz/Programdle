

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

export const LANGUAGES: ProgrammingLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    releaseYear: 1991,
    paradigm: 'Multi-paradigm',
    typing: 'Dynamic Strong',
    level: 'High-level',
    isCompiled: false,
    snippets: [
      `squared_evens = [x**2 for x in range(10) if (lambda y: y % 2 == 0)(x)]`,
      `class Dog:\n    def __init__(self, name):\n        self.name = name`,
      `print("Hello, World!")`
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
      `Function.prototype.bind = function(ctx) {\n  const fn = this;\n  return function(...args) { return fn.apply(ctx, args); };\n};`,
      `async function getData() {\n  const res = await fetch('/api/data');\n  return await res.json();\n}`,
      `console.log("Hello, World!");`
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
      `List<String> filtered = list.stream()\n    .filter(s -> s.startsWith("A"))\n    .collect(Collectors.toList());`,
      `@Override\npublic void doSomething() {\n    super.doSomething();\n}`,
      `System.out.println("Hello, World!");`
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
      `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}`,
      `match coin {\n    Coin::Penny => 1,\n    Coin::Quarter => 25,\n}`,
      `println!("Hello, World!");`
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
      `void (*func_ptr)(int) = &my_function;\nint *arr = (int*)malloc(5 * sizeof(int));`,
      `typedef struct {\n    int x;\n    int y;\n} Point;`,
      `int main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`
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
      `Func<int, bool> isEven = x => x % 2 == 0;\nvar evens = numbers.Where(isEven).ToList();`,
      `public string Name { get; set; }\npublic int Age { get; private set; }`,
      `Console.WriteLine("Hello, World!");`
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
      `def method_missing(m, *args, &block)\n  puts "Called missing method: #{m}"\nend`,
      `5.times do |i|\n  puts "This is loop number #{i}"\nend`,
      `puts "Hello, World!"`
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
      `main = getLine >>= \\name -> putStrLn ("Hello, " ++ name)`,
      `factorial :: Integer -> Integer\nfactorial 0 = 1\nfactorial n | n > 0 = n * factorial (n - 1)`,
      `putStrLn "Hello, World!"`
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
      `ch := make(chan int)\ngo func() {\n    ch <- 42\n}()\nvalue := <-ch`,
      `if err != nil {\n    return nil, err\n}`,
      `fmt.Println("Hello, World!")`
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
      `"concurrency" |> String.graphemes() |> Enum.frequencies()`,
      `def handle_result({:ok, value}), do: IO.puts(value)\ndef handle_result({:error, _reason}), do: IO.puts("Error")`,
      `IO.puts "Hello, World!"`
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
      `local mt = { __add = function(a, b) return a.value + b.value end }\nsetmetatable(obj, mt)`,
      `local player = {\n  x = 100,\n  y = 200,\n  name = "Hero"\n}`,
      `print("Hello, World!")`
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
      `template <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}`,
      `std::vector<int> numbers = {1, 2, 3, 4, 5};\nfor(int n : numbers) {\n    std::cout << n << '\\n';\n}`,
      `std::cout << "Hello, World!" << std::endl;`
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
      `public function __construct(private string $name) {}\n\npublic function __toString(): string {\n    return $this->name;\n}`,
      `foreach ($users as $key => $value) {\n    echo $key . ": " . $value . "\\n";\n}`,
      `echo "Hello, World!";`
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
      `type Readonly<T> = {\n    readonly [P in keyof T]: T[P];\n};`,
      `interface User {\n    id: number;\n    name: string;\n    email?: string;\n}`,
      `const message: string = "Hello, World!";\nconsole.log(message);`
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
      `guard let unwrappedValue = optionalValue else {\n    return\n}`,
      `struct Player: Equatable {\n    var name: String\n    var score: Int\n}`,
      `print("Hello, World!")`
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
      `GlobalScope.launch {\n    delay(1000L)\n    println("World!")\n}`,
      `data class User(val name: String, val age: Int)\nval updatedUser = user.copy(age = 30)`,
      `println("Hello, World!")`
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
      `result <- lapply(my_list, function(x) x^2)\nfiltered <- result[result > 10]`,
      `df <- data.frame(\n  Name = c("Alice", "Bob"),\n  Age = c(25, 30)\n)`,
      `print("Hello, World!")`
    ]
  }
];
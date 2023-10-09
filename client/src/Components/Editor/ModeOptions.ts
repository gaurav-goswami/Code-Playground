interface IMode {
    mode : string
    name : string
}

const modeOption : Array<IMode> = [
    {mode : "javascript" , name : "Javascript"},
    {mode : "text/x-c++src" , name : "C"},
    {mode : "text/x-c++src" , name : "C++"},
    {mode : "text/x-java" , name : "Java"},
    {mode : "text/x-python" , name : "Python"},
    {mode : "r" , name : "R"},
    {mode : "rust" , name : "Rust"},
    {mode : "ruby" , name : "Ruby"},
    {mode : "php" , name : "PHP"},
]

export default modeOption;
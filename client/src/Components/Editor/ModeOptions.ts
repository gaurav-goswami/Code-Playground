interface IMode {
    mode : string
    name : string
}

const modeOption : Array<IMode> = [
    {mode : "javascript" , name : "Javascript"},
    {mode : "clike" , name : "C"},
    {mode : "clike" , name : "C++"},
    {mode : "clike" , name : "Java"},
    {mode : "python" , name : "Python"},
    {mode : "r" , name : "R"},
    {mode : "rust" , name : "Rust"},
    {mode : "ruby" , name : "Ruby"},
    {mode : "erlang" , name : "Erlang"},
    {mode : "php" , name : "PHP"},
    {mode : "fortran" , name : "Fortran"},
]

export default modeOption;
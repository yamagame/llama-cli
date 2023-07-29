import { spawn } from "child_process"
import * as readline from "readline"

const LLAMA_CPP_MAIN = process.env["LLAMA_CPP_MAIN"] || "../llama.cpp/main"
const LLAMA_MODEL =
  process.env["LLAMA_MODEL"] || "../llama.cpp/models/llama-2-7b-chat.ggmlv3.q4_0.bin"

const r = readline.createInterface({
  input: process.stdin,
  terminal: false,
})

r.on("line", (line) => {
  const llama = spawn(LLAMA_CPP_MAIN, [
    "-t",
    "8",
    "-ngl",
    "1",
    "-m",
    LLAMA_MODEL,
    "--color",
    "-c",
    "2048",
    "--temp",
    "0.7",
    "--repeat_penalty",
    "1.1",
    "-n",
    "-1",
    "-p",
    `[INST] ${line} [/INST]`,
  ])
  llama.stdout.on("data", (data) => {
    process.stdout.write(data.toString())
  })
  llama.on("close", (code) => {
    process.stdout.write("\n>")
  })
})

process.stdout.write(">")

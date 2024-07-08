<!-- A Brief Introduction to Command Line -->

## Importance of Command Line

Understanding the Command Line is crucial as it's essential for using build tools and managing projects efficiently.

## Getting Started

Let's start by opening a terminal:

- **Mac**: Open Terminal.
- **Windows**: Use Command Prompt (CMD) from the Start menu.
- **Linux**: Use your preferred terminal emulator.

## Basics of Navigation

### Opening Terminal in VS Code

You can open the terminal in VS Code with keyboard shortcuts:

- Use `Ctrl + (backtick)` to open the Terminal.
  to open the Terminal.
  to open the Terminal.
  to open the Terminal.
- Use `Ctrl + Shift + (backtick)` to open a new terminal instance in VS Code.

### Listing Contents

To list files and directories in the current folder:

```bash
ls  # on Mac/Linux
dir  # on Windows
```

### Clearing the Terminal

To clear the terminal screen, use the following command:

```bash
clear
```

## Changing Directories

Navigate between directories using `cd`:

```bash
cd foldername  # Move into a directory
cd ..  # Move up one level
cd ../.. # Move up two levels
```

## Creating a Folder

To create a New Folder in both Windows and MacOS we use the `mkdir` command

Create a new directory:

```bash
mkdir test
```

## Deleting a Folder

To delete a folder (directory):

- #### Windows

  Use the `rd` (remove directory) command with the folder name:

  ```cmd
  rd /s /q foldername
  ```

  - `/s`: Removes all directories and files in the specified directory in addition to the directory itself.
  - `/q`: Quiet mode, which prevents prompting for confirmation when deleting.

- #### Mac OS

  To delete a folder (directory) on MacOS/Linux:

  Use the `rm` command with the `-r` (recursive) flag:

  ```bash
  rm -r foldername
  ```

  - -r: Recursively removes directories and their contents

## Creating Files

- ### Creating Files (Windows)

  To create empty files on Windows, you can use the `edit` command followed by the file names:

  ```cmd
  edit index.html script.js
  ```

- ### Creating Files (MacOS)

  To create empty files on MacOS, you can use the `touch` command followed by the file names:

  ```bash
  touch index.html script.js
  ```

## Deleting Files

To remove files from the command line interface, you can use different commands on Windows and MacOS/Linux

- ### Deleting Files (Windows)

  To remove a file on Windows, use the `del` command followed by the file name:

  ```cmd
  del filename.txt
  ```

- ### Deleting Files (MacOS/Linux)

  To delete a file on MacOS/Linux, use the `rm` command:

  ```bash
  rm filename.txt
  ```

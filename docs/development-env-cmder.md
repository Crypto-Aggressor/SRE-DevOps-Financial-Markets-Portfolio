# Setting Up Your Development Environment with Cmder

**Cmder** is a console emulator for Windows that integrates features from Unix-based systems through Git Bash, enhancing the command line experience. It offers a versatile toolset for developers and IT professionals, combining powerful Unix command availability with Windows' native capabilities.

## Enhanced Command Line with Git Bash Integration

### Why Git Bash with Cmder?

- **Unix Command Availability**: Access commands like `ls`, `grep`, and `ssh` directly on Windows.
- **Seamless Git Integration**: Execute Git commands within the console, enhancing version control workflows.
- **Scripting Flexibility**: Utilize Cmder to write and execute complex bash scripts on Windows.
- **Environment Versatility**: Switch seamlessly between CMD, PowerShell, and WSL.
- **Remote Connectivity**: Manage remote Unix servers directly from Cmder.

## Installation Guide

1. **Download**: Visit the [official Cmder website](https://cmder.net) and download the latest version.
2. **Unzip**: Extract the file to `C:\Users\<WindowUser>\bin\cmder`.

## Configuring Environment Variables

Set up the following environment variables for effective integration:

- **CMDER_ROOT**: `C:\Users\<WindowUser>\bin\cmder`
- **CMDER_HOME**: `C:\Users\<WindowUser>\bin\cmder`
- **ConEmuDir**: `[cmder_root]\vendor\conemu-maximus5`
- **Update PATH**: Add the Cmder path to your system's PATH variable.

## Organizing Development Tools

Store all development tools under `C:\Users\<WindowUser>\bin` for centralized management.

## Using Aliases and Shell Customizations

### Aliases

Define aliases in Cmder to streamline command executions. Instead of using `user_aliases.cmd`, you should add your aliases directly in the `.bashrc` file, which is executed every time a new shell session is started. This method ensures your aliases are always available.

### Configuring .bashrc

1. **Navigate** to your user home directory: `C:\Users\<WindowUser>`
2. **Edit or create** `.bashrc` and add your alias definitions in the format:

    ```bash
    alias ls='ls --color=auto'
    alias ll='ls -lah'
    ```

### Leveraging .bashrc and .bash_profile

- **.bashrc**: This file runs for each new bash instance. Place environment setups here.
- **.bash_profile**: This runs for login shells. Use it to execute commands that should run once at login.

To utilize these files in Cmder:

1. Navigate to `C:\Users\<WindowUser>`.
2. Create or modify `.bashrc` and `.bash_profile` to include your custom commands or environment settings.

## Changing the Default Git Bash Prompt in Cmder

### Issue with Conda and the Default Prompt

The default prompt symbol in Git Bash on Cmder is `λ`, which can cause issues with some systems, such as Conda. Changing it to a more standard `$` can avoid potential bugs.

### Steps to Change the Prompt

1. **Locate the Prompt Configuration File**: Navigate to `C:\Users\<WindowsUser>\bin\cmder\vendor\git-for-windows\etc\profile.d\git-prompt.sh`.
2. **Modify the Prompt**:
   - Open `git-prompt.sh` in a text editor.
   - Find the line that sets the prompt to `λ`, usually `PS1="$PS1"'λ '`.
   - Comment out this line by adding `#` at the beginning.
   - Directly below it, add `PS1="$PS1"'$ '`, to change the prompt to `$`.
3. **Save the File** and restart Cmder to apply the changes.

This adjustment ensures better compatibility with various tools and scripts, particularly for users integrating Conda environments within Cmder.

## Running Cmder Shell as VS Code Terminal

**👉 Note:** Ensure both VS Code and Cmder are updated to the latest versions to avoid compatibility issues.

1. **Access VS Code Settings**: Press `Ctrl + ,`, search for `terminal profiles windows`, and select `Edit in settings.json`.

2. **Open `settings.json` Manually**: Use the Command Palette (`Ctrl + Shift + P`), type `settings.json`, and press Enter.

3. **Configure Terminal Profile**:
   Update your `settings.json` to include the following configuration for Cmder:

   ```json
   "terminal.integrated.defaultProfile.windows": "Cmder",
   "terminal.integrated.profiles.windows": {
       "Cmder": {
           "name": "Cmder",
           "path": ["${env:CMDER_ROOT}\\vendor\\git-for-windows\\bin\\bash.exe"],
           "icon": "terminal-cmd",
           "color": "terminal.ansiGreen"
       }
   }
    ```

  👉 **Note:** Ensure that the CMDER_ROOT environment variable is correctly configured. Alternatively, you can replace ${env:cmder_root} with the actual path to your Cmder installation (not recommended).

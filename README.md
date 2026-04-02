# Markdown Editor

[![CI](../../../actions/workflows/ci.yaml/badge.svg?label=CI&logo=forgejo&logoColor=white&style=flat-square)](../../../actions?workflow=ci.yaml)

The personal markdown editor of [Stefan Kühnel](https://stefankuehnel.com).

## Get Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://codeberg.org/stefankuehnel/editor.git
   cd editor
   ```

2. **Install dependencies:**

   ```bash
   task install
   ```

3. **Initialize project:**

   ```bash
   task init --interactive
   ```

3. **Run the development server:**

   ```bash
   task dev
   ```

4. **Open your browser:**

   Navigate to `http://localhost:5173` to see the markdown editor in action.

## Documentation

Below you will find a list of documentation for tools used in this project.

- **Vite**: A Next Generation Frontend Tooling - [Docs](https://vitejs.dev/guide/)
- **React**: A JavaScript Library for Building User Interfaces - [Docs](https://react.dev)
- **Nix**: Nix Package Manager - [Docs](https://wiki.nixos.org/wiki/Nix)
- **Nix Flakes**: An Experimental Feature for Managing Dependencies of Nix Projects - [Docs](https://wiki.nixos.org/wiki/Flakes)

## Found a Bug?

Thank you for your message! Please fill out a [bug report](../../../issues/new?assignees=&labels=&template=bug_report.md&title=).

## License

This project is licensed under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.txt).

import Node from './node';

class Trie {
  constructor() {
    this.root = new Node('');
  }

  addWord(word) {
    const handleAdd = (node, string) => {
      if (!string) {
        return null;
      }
      const letter = string.slice(0, 1);
      let child = node.children[letter];
      if (!child) {
        child = new Node(letter);
        node.children[letter] = child;
      }
      const remainder = string.slice(1);
      if (!remainder) child.isWord = true;
      return handleAdd(child, remainder);
    };
    if (!this.root) return null;
    return handleAdd(this.root, word);
  }

  addWords(words) {
    words.forEach((word) => {
      this.addWord(word);
    });
  }

  find(word) {
    const handleFind = (node, string) => {
      if (!string) {
        return node.isWord;
      }
      const letter = string.slice(0, 1);
      const child = node.children[letter];
      if (!child) return false;
      const remainder = string.slice(1);
      return handleFind(child, remainder);
    };
    return handleFind(this.root, word);
  }

  beginsWith(prefix) {
    const startNode = (node, string) => {
      if (!string) return node;
      const letter = string.slice(0, 1);
      const child = node.children[letter];
      if (!child) return [];
      const remainder = string.slice(1);
      return startNode(child, remainder);
    };
    const findSuffixes = (node, path = '') => {
      let collector = [];
      Object.keys(node.children).forEach((key) => {
        const child = node.children[key];

        if (child.isWord) {
          const suffix = `${prefix}${path}${key}`;
          collector.push(suffix);
        }

        collector = collector.concat(findSuffixes(child, path + key));
      });
      return collector;
    };
    const start = startNode(this.root, prefix);
    const initial = start.isWord ? [prefix] : [];
    return initial.concat(findSuffixes(start));
  }
}

export default Trie;

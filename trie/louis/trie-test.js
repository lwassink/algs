import Trie from './trie';

const trie = new Trie();

trie.addWord('it');

console.log(`Properly adds initial: ${trie.root.children['i'].children['t'].isWord === true}`);

console.log(`Properly finds word: ${trie.find('it') === true}`);

trie.addWords(['its', 'itself', 'apple', 'aliens', 'apply', 'application']);

console.log(`Properly adds words: ${trie.find('itself') === true}`);

const simpleBeginsWith = JSON.stringify(trie.beginsWith('it'));

console.log(`Properly finds suffixes: ${simpleBeginsWith === JSON.stringify(['it', 'its', 'itself'])}`);

const forkedBeginsWith = JSON.stringify(trie.beginsWith('app'));

console.log(`Properly finds forked suffixes: ${forkedBeginsWith === JSON.stringify(['apple', 'apply', 'application'])}`);

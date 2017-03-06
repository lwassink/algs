public class RBTree<Key extends Comparable<Key>, Value> {
	private Node root;
	private static final boolean RED = true;
	private static final boolean BLACK = false;

	private class Node {
		private Key key;
		private Value val;
		private int size;
		private Node left, right;
		private boolean color;

		public Node(Key key, Value val) {
			this.key = key;
			this.val = val;
			this.size = 1;
			this.color = RED;
		}
	}

	public RBTree() {
		root = null;
	}

	public int size() {
		return size(root);
	}

	public int size(Node node) {
		if (node == null) return 0;
		return node.size;
	}

	public Value get(Key k) {
		return get(root, k);
	}

	private Value get(Node node, Key k) {
		if (node == null) return null;
		int cmp = k.compareTo(node.key);
		if (cmp < 0)     	return get(node.left, k);
		else if (cmp > 0)	return get(node.right, k);
		else             	return node.val;
	}

	public void put(Key k, Value v) {
		root = put(root, k, v);
	}

	private Node put(Node node, Key k, Value v) {
		if (node == null) return new Node(k, v);
		int cmp = k.compareTo(node.key);

		if (cmp < 0) node.left = put(node.left, k, v);
		else if (cmp > 0) node.right = put(node.right, k, v);
		else node.val = v;
		
		if (isRed(node.right) && !isRed(node.left))    node = rotateLeft(node);
		if (isRed(node.left) && isRed(node.left.left)) node = rotateRight(node);
		if (isRed(node.right) && isRed(node.left))     flipColors(node);

		node.size = size(node.left) + size(node.right) + 1;
		return node;
	}

	public Iterable<Key> inOrder() {
		Queue<Key> queue = new Queue<Key>();
		inOrder(root, queue);
		return queue;
	}

	private void inOrder(Node x, Queue<Key> queue) {
		if (x == null) return;
		inOrder(x.left, queue);
		queue.enqueue(x.key);
		inOrder(x.right, queue);
	}
	
	private boolean isRed(Node node) {
		if (node == null) return false;
		return node.color;
	}

	private Node rotateLeft(Node x) {
		if (x.right == null) return x;
		Node right = x.right;
		x.right = right.left;
		right.left = x;
		right.color = x.color;
		x.color = RED;
		return right;
	}

	private Node rotateRight(Node x) {
		if (x.left == null) return x;
		Node left = x.left;
		x.left = left.right;
		left.right = x;
		left.color = x.color;
		x.color = RED;
		return left;
	}
	
	private void flipColors(Node x) {
		x.left.color = BLACK;
		x.right.color = BLACK;
		x.color = RED;
	}

	public static void main(String[] args) {
		RBTree<Integer, String> test = new RBTree<Integer, String>();
		test.put(5, "good");
		test.put(1, "Hi");
		test.put(2, "there");
		test.put(7, "friend");
		test.put(3, "my");
		test.put(4, "very");
//		System.out.println(test.get(3));
//		System.out.println(test.get(1));
//		System.out.println(test.get(5));
		for (int key : test.inOrder()) {
//			System.out.println(key);
			System.out.println(test.get(key));
		}
		System.out.println(test.isBST());
	}

	public boolean isBST() {
		return isBST(root, null, null);
	}

	private boolean isBST(Node x, Key min, Key max) {
		if (x == null) return true;
		if (min != null && x.key.compareTo(min) <= 0) return false;
		if (max != null && x.key.compareTo(max) >= 0) return false;
		return isBST(x.left, min, x.key) && isBST(x.right, x.key, max);
	}
}
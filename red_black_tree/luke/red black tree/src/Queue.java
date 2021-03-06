
import java.util.Iterator;

public class Queue<Item> implements Iterable<Item> {
	private Node first;
	private Node last;
	private int size;
	
	private class Node {
		private Item value;
		private Node next;
		
		public Node(Item value) {
			this.value = value;
			this.next = null;
		}
	}
	
	public Queue() {
		this.first = null;
		this.last = null;
	}
	
	public void enqueue(Item x) {
		Node newNode = new Node(x);
		if (last == null) {
			first = newNode;
			last = newNode;
		} else {
			last.next = newNode;
			last = last.next;
		}
		size++;
	}
	
	public Item dequeue() {
		if (isEmpty()) return null; 
		Item output = first.value;
		first = first.next;
		size --;
		return output;
	}
	
	public int size() {
		return size;
	}
	
	public boolean isEmpty() {
		return (size == 0);
	}
	
	public QI iterator() {
		return new QI(first);
	}
	
	private class QI implements Iterator<Item> {
		Node current = first;
		
		public QI(Node current) {
			this.current = current;
		}
		
		public boolean hasNext() {
			return (current != null);
		}
		
		public Item next() {
			Item next = current.value;
			current = current.next;
			return next;
		}
	}
	
	public static void main(String[] args) {
		Queue<String> test = new Queue<String>();
		test.enqueue("Hi");
		test.enqueue("There");
		test.enqueue("You");
		for (String item : test) System.out.println(item);
		test.dequeue();
		test.enqueue("me");
		for (String item : test) System.out.println(item);
		System.out.println(test.size());
		test.dequeue();
		System.out.println(test.size());
		test.dequeue();
		System.out.println(test.size());
		test.dequeue();
		System.out.println(test.size());
		test.dequeue();
		System.out.println(test.size());
		test.dequeue();
	}
}

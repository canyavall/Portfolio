package bankPack;

public class Account {

	private final String nr = java.util.UUID.randomUUID().toString();
	private double balance = 0;
	
	public double getBalance() {
		return balance;
	}

	public void credit(double amount){
		this.balance += amount;
	}
	
	public void debit(double amount){
			this.balance -= amount;
	}

	public String getNr() {
		return nr;
	}
	
	public String toString(){
		return "Account " + this.nr + " has " + balance + " CHF";		
	}
}

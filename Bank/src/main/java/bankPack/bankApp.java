package bankPack;

import java.util.List;
import java.util.Scanner;

public class bankApp {
	public static void main(String[] args) {
		Bank bank = new Bank();
		System.out.println("WELCOME TO PIXIE BANK");
		Scanner reader = new Scanner(System.in);
		System.out.println("PLease, select an option");
		
		while(true){
			System.out.println("1- Create a new Customer");
			System.out.println("2- Find customer by id");
			System.out.println("3- Delete customer by id");
			System.out.println("4- Add money into account");
			System.out.println("5- Subtract money from account");
			System.out.println("6- List of customers with negative balance");
			System.out.println("9- List of customers");
			int option = reader.nextInt();
			reader.nextLine();
			if (option == 0){//Logout				
				break;
			}else if (option == 1){//Create customer
				createCustomer(bank, reader);
			}else if (option == 2){// Find customer by id
				findCustomerById(bank, reader);
			}else if (option == 3){// Delete Customer
				deleteCustomer(bank, reader);
			}else if (option == 4){// Credit
				creditToCustomer(bank, reader);
			}else if (option == 5){// Debit
				debitToCustomer(bank, reader);
			}else if (option == 6){// Customers with negative balance
				negativeBalance(bank);
			}else if (option == 9){// List of customers
				listOfCustomers(bank);
			}
			System.out.println("------------------------------------------");
		}
		System.out.println("Thank you very much for using Pixie services.");
	}

	private static void listOfCustomers(Bank bank) {
		System.out.println("ID:NAME");
		List<Customer> custList = bank.listofCustomers();
		for (Customer item : custList) {					
		    System.out.println(item.toString());
		}
	}

	private static void debitToCustomer(Bank bank, Scanner reader) {
		System.out.println("Please, introduce the id of the customer ");
		Integer customerId = reader.nextInt();
		Customer cust = bank.getCustomerById(customerId);
		reader.nextLine();
		System.out.println("Please, introduce the ammount to be subtract to " + cust.getName() + " account");
		Integer amount = reader.nextInt();
		reader.nextLine();				
		Account acc = cust.getAcc();
		acc.debit(amount);
		System.out.println("Customer with id " + cust.getName() + " has " + acc.getBalance() + "CHF");
	}

	private static void creditToCustomer(Bank bank, Scanner reader) {
		System.out.println("Please, introduce the id of the customer ");
		Integer customerId = reader.nextInt();
		Customer cust = bank.getCustomerById(customerId);
		reader.nextLine();
		System.out.println("Please, introduce the ammount to be add to " + cust.getName() + " account");
		Integer amount = reader.nextInt();
		reader.nextLine();				
		Account acc = cust.getAcc();
		acc.credit(amount);
		System.out.println("Customer with id " + cust.getName() + " has " + acc.getBalance() + "CHF");
	}

	private static void deleteCustomer(Bank bank, Scanner reader) {
		System.out.println("Please, introduce the id of the customer you want to delete");
		Integer customerId = reader.nextInt();
		reader.nextLine();
		bank.deleteCustomer(customerId);
		System.out.println("Customer with id " + customerId + " has been deleted");
	}

	private static void findCustomerById(Bank bank, Scanner reader) {
		System.out.println("Please, introduce the id of the new customer");
		int customerId = reader.nextInt();
		reader.nextLine();
		Customer cust = bank.getCustomerById(customerId);
		System.out.println(cust.toString());
	}

	private static void createCustomer(Bank bank, Scanner reader) {
		System.out.println("Please, introduce the name of the new customer");
		String name = reader.next();
		bank.createCustomer(name);
		System.out.println("Customer " + name + " has been created");
	}
	
	private static void negativeBalance(Bank bank) {
		System.out.println("ID:NAME");
		List<Customer> custList = bank.negativebalance();
		for (Customer item : custList) {					
		    System.out.println(item.toString());
		}
	}
}

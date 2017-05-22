package bankPack;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;

import bankPack.Bank;
import bankPack.Customer;

public class bankTest {
	
	private final Bank bank = new Bank();	
	private int deadId = bank.createCustomer("Deadpool");
	private int spidId = bank.createCustomer("Spiderman");
	private int batId = bank.createCustomer("Batman");
	private Customer cust = bank.getCustomerById(deadId);
	
	@Test
	public void testCustomerDB() {
		assertNotNull(deadId);
		assertNotNull(spidId);
		assertNotNull(batId);
		
		List<Customer> accList = bank.listofCustomers();
		
		//Check number of accounts
		assertEquals(3, accList.size());
	}

	@Test
	public void testCustomerById() {		
		assertEquals("Deadpool", cust.getName());
	}
	
	@Test
	public void testCredit() {
		Account acc = cust.getAcc();
		acc.credit(500);
		assertEquals(500, acc.getBalance(), 0.01);
	}
	
	@Test
	public void testDebit() {
		Account acc = cust.getAcc();
		acc.debit(500);
		assertEquals(0, acc.getBalance(), 0.01);
	}
	
}

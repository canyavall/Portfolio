package bankPack;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class Bank {

	private static final AtomicInteger idGenerator = new AtomicInteger();	
	private Map<Integer, Customer> customers = new HashMap<>();
	
	public int createCustomer(String name){
		Customer cust = new Customer(name, idGenerator.incrementAndGet());
		customers.put(cust.getId(), cust);
		return cust.getId();
	}
	
	public void deleteCustomer(Integer id){
		customers.remove(id);
	}
	
	public Customer getCustomerById(Integer id){
		return customers.get(id);		
	}
	
	public List<Customer> listofCustomers(){
		return new ArrayList<Customer>(customers.values());		
	}
	
	public List<Customer> negativebalance(){
		List<Customer> custRes = new ArrayList();
		for (Customer item : this.listofCustomers()) {		
			Account acc = item.getAcc();
		    if (acc.getBalance() < 0){
		    	custRes.add(item);
		    }
		}
		return custRes;
		
	}
}

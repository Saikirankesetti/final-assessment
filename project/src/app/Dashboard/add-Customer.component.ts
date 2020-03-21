import { CustomerService } from '../Customer.service';
import { Customer } from '../Customer';
import { Component, OnInit } from '../read-Customer/node_modules/@angular/core';
import { NgForm } from '../read-Customer/node_modules/@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-Customer',
  templateUrl: './add-Customer.component.html',
  styleUrls: ['./add-Customer.component.css']
})
export class AddCustomerComponent implements OnInit {
Customer: Customer = new Customer();
  constructor(private Customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
  }
  show(Customerdet: NgForm)
  {
    this.Customerservice.addCustomer(Customerdet).subscribe(response => {
      //console.log(response);
      this.router.navigate(['/']);
    });
  }
}

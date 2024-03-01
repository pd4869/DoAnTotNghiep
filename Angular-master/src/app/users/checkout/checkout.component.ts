import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { HomeService } from '../service/home.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    "../../../assets/nguoidung/css/bootstrap.min.css" ,
    "../../../assets/nguoidung/css/font-awesome.min.css" ,
    "../../../assets/nguoidung/css/themify-icons.css" ,
    "../../../assets/nguoidung/css/elegant-icons.css" ,
    "../../../assets/nguoidung/css/owl.carousel.min.css" ,
    "../../../assets/nguoidung/css/nice-select.css" ,
    "../../../assets/nguoidung/css/jquery-ui.min.css" ,
    "../../../assets/nguoidung/css/slicknav.min.css" ,
    "../../../assets/nguoidung/css/style.css" ,
 
  ]
})
export class CheckoutComponent implements OnInit {
  orderForm!: FormGroup;
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService,private snackBar: MatSnackBar, private homeService: HomeService, private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    // Tạo orderForm trước khi gọi service để lấy dữ liệu từ cart
    this.orderForm = this.formBuilder.group({
      Hoten: ['', Validators.required],
      Diachi: ['', Validators.required],
      sdt: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Sanphamjson: this.formBuilder.array([]),
    });


  
    // Gọi service để lấy dữ liệu từ cart
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items;
      this.updateTotal();

      // Tự động gán các trường từ cartItems vào sanphamjson
      const sanphamjsonControls = this.cartItems.map(item => this.createSanphamGroup(item));
      this.orderForm.setControl('Sanphamjson', this.formBuilder.array(sanphamjsonControls));
    });
  }

  get sanphamjson(): FormArray {
    return this.orderForm.get('Sanphamjson') as FormArray;
  }

  addSanpham(item: any): void {
    this.sanphamjson.push(this.createSanphamGroup(item));
  }

  private createSanphamGroup(item: any): FormGroup {
    return this.formBuilder.group({
      MaSach: [item.id, Validators.required],
      TenSach: [item.TenSach, Validators.required],
      Anh: [item.Anh], // Thêm thông tin hình ảnh nếu có
      SoLuong: [item.SoLuong, [Validators.required, Validators.min(0)]],
      Gia: [item.Gia, [Validators.required, Validators.min(0)]],
      Tongtien: [item.Gia* item.SoLuong], // Bạn có thể thêm validators nếu cần
    });
  }

  submitOrder(): void {
    console.log('Form value:', this.orderForm.value);
    if (this.orderForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const orderData = this.orderForm.value;
    try {
      // Check if orderData.sanphamjson is already a string
      orderData.sanphamjson = typeof orderData.sanphamjson === 'string'
        ? JSON.parse(orderData.sanphamjson)
        : orderData.sanphamjson;
    } catch (error) {
      // Handle the parsing error
      console.error('Error parsing orderData.sanphamjson:', error);
      // You might want to throw an error or handle it in an appropriate way
      return;
    }

    this.homeService.createOrder(orderData).subscribe(
      (response) => {
        console.log('Đơn hàng đã được tạo:', response);
        this.showSuccessNotification('Bạn đã thanh toán thành công');
        this.cartService.clearCart();
        this.router.navigate(['/users/index']);

        // Thực hiện các hành động sau khi tạo đơn hàng thành công
      },
      (error) => {
        console.error('Lỗi khi tạo đơn hàng:', error);
        // Xử lý lỗi
      }
    );
  }

  private updateTotal(): void {
    // Tính tổng giá trị từ cart service
    this.total = this.cartService.getTotalPrice();
  }






 

  showSuccessNotification(message: string): void {
    // Ở đây, bạn có thể sử dụng một thư viện thông báo hoặc hiển thị thông báo theo cách bạn muốn
    // Ví dụ sử dụng Angular Material Snackbar:
    this.snackBar.open(message, 'Đóng', {
      duration: 2000, // Thời gian hiển thị thông báo
      verticalPosition: 'top', // Vị trí của thông báo
    });
  }
}

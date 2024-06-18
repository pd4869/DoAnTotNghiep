import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capnhattrangthai',
  templateUrl: './capnhattrangthai.component.html',
  styleUrls: ['./capnhattrangthai.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
  ],
  
})
export class CapnhattrangthaiComponent implements OnInit{
  updateStatusForm!: FormGroup;
  orderStatusList: string[] = ['Đã đặt', 'Đã xác nhận', 'Đang vận chuyển', 'Đã giao'];

  constructor(private api : HomeService, private router: Router,private route: ActivatedRoute,  private formBuilder: FormBuilder) {}      
  subjects: any;
  category: any = {
    id: 0,
    Trangthai: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.api.getByIDhoadonban(id).subscribe((result: any) => {
        this.category = result[0];
        console.log(this.category);
      });

      this.updateStatusForm = this.formBuilder.group({
        id: [id],
        Trangthai: ['']
      });
    })  }
  

    onSubmit(): void {
      if (this.updateStatusForm.valid) {
        this.api.updateOrderStatus(this.updateStatusForm.value).subscribe(response => {
          console.log('Trạng thái đơn hàng đã được cập nhật:', response);
          this.refreshList();
        this.router.navigate(['admin/hoadonban']);
        }, error => {
          console.error('Error updating order status:', error);
          
        });
      }}
      
  suatrangthai(id: number, Trangthai: string): void {
    this.router.navigate(['/admin/suatrangthai', id]);
    this.api.suatrangthai(id, Trangthai).subscribe(
      result => {
        console.log('Item edited successfully', result);
        // You can handle the result as needed
        this.router.navigate(['admin/hoadonban']);
        this.refreshList();
      },
      
    );
  }
  private refreshList(): void {
    this.api.getListhoadonban().subscribe(list => {
      this.subjects = list;
      console.log(this.subjects);
    });
  }
}

import { Component , OnInit} from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addhoadonnhap',
  templateUrl: './addhoadonnhap.component.html',
  styleUrls: ['./addhoadonnhap.component.css',
    "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
  
  ]
})
export class AddhoadonnhapComponent implements OnInit{
  hoaDonNhapForm!: FormGroup;
  constructor(private api : HomeService, private router: Router,private fb: FormBuilder, private http: HttpClient) {}
  subjects: any[] = [];
  hdn: any[] = [];

  sachs: any[] = [];
  nguoidungs: any[] = [];
  selectedItem: any | null = null;
  selectedSach: any;
  selectedMaNXB: any;
  selectedMaNguoiDung: any;

  
  ngOnInit(): void {
    this.hoaDonNhapForm = this.fb.group({
      NgayNhap: ['', Validators.required],
      MaNXB: ['', Validators.required],
      MaNguoiDung: ['', Validators.required],
      chitiet: this.fb.array([]),
      tong: [{ value: '', disabled: true }, Validators.required]
    });

    this.addChiTiet(); // Khởi tạo một chi tiết đầu tiên
  
    this.api.getListngdung().subscribe(res => {
      this.nguoidungs = res;
      console.log(this.nguoidungs);
    });

    this.api.getListsp().subscribe(res => {
      this.sachs = res;
      console.log(this.sachs);
    });

    this.api.getListnhaxuatban().subscribe(res => {
      this.subjects = res;
      console.log(this.subjects);
    });
    
  }
  get chitiet(): FormArray {
    return this.hoaDonNhapForm.get('chitiet') as FormArray;
  }

  addChiTiet(): void {
    this.chitiet.push(this.fb.group({
      MaSach: ['', Validators.required],
      SoLuong: ['', Validators.required],
      GiaNhap: ['', Validators.required],
      tongtien: [{ value: '', disabled: true }, Validators.required]
    }));
  }

  removeChiTiet(index: number): void {
    this.chitiet.removeAt(index);
    this.calculateTotalSum();
  }

  calculateTotal(index: number): void {
    const chiTietFormGroup = this.chitiet.at(index) as FormGroup;
    const soLuong = chiTietFormGroup.get('SoLuong')!.value;
    const giaNhap = chiTietFormGroup.get('GiaNhap')!.value;
    const tongtien = soLuong * giaNhap;
    chiTietFormGroup.get('tongtien')!.setValue(tongtien);
    this.calculateTotalSum();
  }

  calculateTotalSum(): void {
    const totalSum = this.chitiet.controls.reduce((sum, control) => {
      return sum + control.get('tongtien')!.value;
    }, 0);
    this.hoaDonNhapForm.get('tong')!.setValue(totalSum);
  }

  onSubmit(): void {
    if (this.hoaDonNhapForm.valid) {
      this.http.post('http://localhost:3000/hoadonnhap/create', this.hoaDonNhapForm.getRawValue())
        .subscribe(
          response => {
            console.log('Hóa đơn nhập đã được lưu:', response);
            this.refreshList();
            this.router.navigate(['/admin/hoadonnhap']);
          },
          error => {
            console.error('Có lỗi xảy ra:', error);
          }
        );
    }}
    addNewItem(itemData: any): void {
    
    this.api.addhoadonnhap(itemData).subscribe(
      result => {
        console.log('Item added successfully', result);
        // You can handle the result as needed
        this.refreshList();
        this.router.navigate(['/admin/hoadonnhap']);
      }
    );
  }

  onSachChange(event: any): void {
    this.selectedSach = event.target.value;
  }
  onMaNXBChange(event: any): void {
    this.selectedMaNXB = event.target.value;
  }
  onMaNguoiDungChange(event: any): void {
    this.selectedMaNguoiDung = event.target.value;
  }
  private refreshList(): void {
    this.api.getListhoadonnhap().subscribe(list => {
      this.hdn = list;
      console.log(this.hdn);
    });
  }
}

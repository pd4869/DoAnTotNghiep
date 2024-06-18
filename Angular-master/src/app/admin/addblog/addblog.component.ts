import { Component , OnInit} from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
  
]
})
export class AddblogComponent implements OnInit{
  constructor(private api : HomeService, private router: Router, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      content: ['']})

  }
  // subjects: any;
  selectedFile: any;
  selectedItem: any | null = null;
  subjects: any[] = [];
  MoTa :any;
  public Editor = ClassicEditor;

  public myForm: FormGroup;
  public config = {
    toolbar: {
      shouldNotGroupWhenFull: true,
      items: [
        'heading', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
        'undo', 'redo'
      ]
    },
    height: 300 // Chiều cao của vùng nhập liệu
  };
  addNewItem(itemData: any): void {
    
    this.api.addItemblog(itemData).subscribe(
      result => {
        console.log('Item added successfully', result);
        // You can handle the result as needed
        this.refreshList();
        // this.router.navigate(['/admin/sanpham']);
      }
    );
  }
  ngOnInit(): void {
    this.api.getList().subscribe(res => {
      this.subjects = res;
      console.log(this.subjects);
    });
  }
 
  

  onFileSelected(event: any): void {
    // Xử lý sự kiện khi người dùng chọn một file
    this.selectedFile = event.target.files[0];
  }
  
  uploadFile(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
  
    this.api.upload(this.selectedFile).subscribe(
      (response: any) => {
        console.log('File uploaded successfully:', response);
        // Xử lý phản hồi từ máy chủ
      }
    );
  }


  
  private refreshList(): void {
    this.api.getListBlog().subscribe(list => {
      this.subjects = list;
      console.log(this.subjects);
    });
  }
}

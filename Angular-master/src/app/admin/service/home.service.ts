import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  constructor(private http: HttpClient) { }
    getList() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/loaisach');
    }

    upload(file: any): Observable<any> {
      const formData = new FormData();
      formData.append('Anh', file,file);
      return this.http.post<any>('http://localhost:3000/sach/create', formData);
    }

    getListsp() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/sach');
    }
    addItemsp(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/sach/add';
      return this.http.post<any>(url, newItem);
    }
    addItemloaisp(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/loaisach/add';
      return this.http.post<any>(url, newItem);
    }
    removeItem(id: number): Observable<any> {
      const url = `http://localhost:3000/loaisach/remove/${id}`;
      return this.http.get<any>(url);     
    }  

    removeItemsp(id: number): Observable<any> {
      const url = `http://localhost:3000/sach/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    addItem(TheLoai: string): Observable<any> {
      const url = 'http://localhost:3000/loaisach/add';
      const body = { TheLoai: TheLoai };
      return this.http.post<any>(url, body);
    }
    editItem(id: number, TheLoai: string): Observable<any> {
      const url = `http://localhost:3000/loaisach/edit/${id}`;
      const body = { TheLoai: TheLoai };
      return this.http.post<any>(url, body);
    }

    editItemsp(id: number,MaLoai: number,TenSach: string,  MoTa: string,Anh: string,      
      MaNXB: number,TacGia: string, NgayTao:Date,SoLuong: number, Gia: number, GiaCu: number, sotrang: number,kichthuoc: string): Observable<any> {
      const url = `http://localhost:3000/sach/edit/${id}`;
      const body = {
        MaLoai: MaLoai,
        TenSach: TenSach,
        MoTa: MoTa,
        Anh: Anh,
        MaNXB: MaNXB,
        TacGia: TacGia,
        NgayTao:NgayTao, 
        SoLuong: SoLuong,
        Gia: Gia,
        GiaCu: GiaCu,
        sotrang: sotrang,
        kichthuoc: kichthuoc,
      };
    
      return this.http.post<any>(url, body);
    }
    
    getItemById(id: any): Observable<any> {
      const url = `http://localhost:3000/loaisach/get-one/${id}`;
      return this.http.get<any>(url);
    }

    getItemByIdsp(id: any): Observable<any> {
      const url = `http://localhost:3000/sach/get-one/${id}`;
      return this.http.get<any>(url);
    }
//nguoidung
    addItemngdung(newItem: any): Observable<any> {
    const url = 'http://localhost:3000/nguoidung/add';
    return this.http.post<any>(url, newItem);
  }
    getListngdung() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/nguoidung');
    }
    removeNgdung(id: number): Observable<any> {
      const url = `http://localhost:3000/nguoidung/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    editNgdung(id: number, 
      HoTen: string, 
      NgaySinh: Date, 
      GioiTinh: string, 
      Anh: string, 
      DiaChi: string, 
      Email: string, 
      DienThoai: string, 
      TrangThai: string): Observable<any> {
      const url = `http://localhost:3000/nguoidung/edit/${id}`;
      const body = {
        HoTen: HoTen, 
        NgaySinh: NgaySinh, 
        GioiTinh: GioiTinh, 
        Anh: Anh, 
        DiaChi: DiaChi, 
        Email: Email, 
        DienThoai: DienThoai, 
        TrangThai: TrangThai
      };
    
      return this.http.post<any>(url, body);
    }
    getItemByIDNgdung(id: any): Observable<any> {
      const url = `http://localhost:3000/nguoidung/get-one/${id}`;
      return this.http.get<any>(url);
    }
 
    addNgdung(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/nguoidung/add';
      return this.http.post<any>(url, newItem);
    }
    getListNgdung() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/nguoidung');
    }

    //Blog
    addItemblog(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/tintuc/add';
      return this.http.post<any>(url, newItem);
    }
    getListBlog() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/tintuc');
    }
    removeBlog(id: number): Observable<any> {
      const url = `http://localhost:3000/tintuc/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    editBlog(id: number, TenBlog: any, Anh: any, Ngaynhap: any, MaNguoiDung: any, Mota: any,): Observable<any> {
      const url = `http://localhost:3000/tintuc/edit/${id}`;
      const body = {
        TenBlog: TenBlog,
        Anh: Anh,
        Ngaynhap: Ngaynhap,
        Mota: Mota,

      };
    
      return this.http.post<any>(url, body);
    }
    addBlog(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/tintuc/add';
      return this.http.post<any>(url, newItem);
    }
    getItemByIdBlog(id: any): Observable<any> {
      const url = `http://localhost:3000/tintuc/get-one/${id}`;
      return this.http.get<any>(url);
    }


//Khách hàng
  addItemkhachhang(newItem: any): Observable<any> {
    const url = 'http://localhost:3000/khachhang/add';
    return this.http.post<any>(url, newItem);
    }
    getListKhachhang() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/khachhang');
    }
    getByIDKhachhang(id: any): Observable<any> {
      const url = `http://localhost:3000/khachhang/get-one/${id}`;
      return this.http.get<any>(url);
    }
    removeKhachhang(id: number): Observable<any> {
      const url = `http://localhost:3000/khachhang/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    editKhachhang(id: number, 
      TenKhachHang: any, 
      DiaChi: any, 
      SoDienThoai: any, 
      Email: any): Observable<any> {
      const url = `http://localhost:3000/khachhang/edit/${id}`;
      const body = {
        TenKhachHang: TenKhachHang,
        DiaChi: DiaChi,
        SoDienThoai: SoDienThoai,
        Email: Email,

      };
    
      return this.http.post<any>(url, body);
    }
    addKhachhang(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/khachhang/add';
      return this.http.post<any>(url, newItem);
    }
    //Nha xuat ban
    getListnhaxuatban() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/nhaxuatban');
    }
    getByIDnhaxuatban(id: any): Observable<any> {
      const url = `http://localhost:3000/nhaxuatban/get-one/${id}`;
      return this.http.get<any>(url);
    }
    removenhaxuatban(id: number): Observable<any> {
      const url = `http://localhost:3000/nhaxuatban/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    editnhaxuatban(id: number, 
      TenNXB: any, 
      DiaChi: any, 
      SDT: any, 
      email: any): Observable<any> {
      const url = `http://localhost:3000/nhaxuatban/edit/${id}`;
      const body = {
        TenNXB: TenNXB,
        DiaChi: DiaChi,
        SDT: SDT,
        email: email,

      };
    
      return this.http.post<any>(url, body);
    }
    addnhaxuatban(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/nhaxuatban/add';
      return this.http.post<any>(url, newItem);
    }
    
    //hoa don ban
    getListhoadonban() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/hoadonban');
    }
    getByIDhoadonban(id: any): Observable<any> {
      const url = `http://localhost:3000/hoadonban/get-one/${id}`;
      return this.http.get<any>(url);
    }
    removehoadonban(id: number): Observable<any> {
      const url = `http://localhost:3000/hoadonban/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    edithoadonban(id: number, 
      MaKhachHang: any, 
      Hoten: any, 
      sdt: any, 
      Email: any,
      Diachi: any, 
      Ngaydat: any, 
      Tong: any, 
      Trangthai: any): Observable<any> {
      const url = `http://localhost:3000/hoadonban/edit/${id}`;
      const body = {
        MaKhachHang: MaKhachHang,
        Hoten: Hoten,
        sdt: sdt,
        Email: Email,
        Diachi: Diachi, 
        Ngaydat: Ngaydat, 
        Tong: Tong, 
        Trangthai: Trangthai

      };
    
      return this.http.post<any>(url, body);
    }
    addhoadonban(newItem: any): Observable<any> {
      const url = 'http://localhost:3000/hoadonban/add';
      return this.http.post<any>(url, newItem);
    }
//hoa don nhap
  getListhoadonnhap() : Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/hoadonnhap');
  }
  getByIDhoadonnhap(id: any): Observable<any> {
    const url = `http://localhost:3000/hoadonnhap/get-one/${id}`;
    return this.http.get<any>(url);
  }
  removehoadonnhap(id: number): Observable<any> {
    const url = `http://localhost:3000/hoadonnhap/remove/${id}`;
    return this.http.get<any>(url);     
  }  
  getListcthdn() : Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/hoadonnhap/cthdb');
  }
  
  edithoadonnhap(id: number, 
    NgayNhap: any, 
    MaNguoiDung: any, 
    MaNXB: any, 
    tong:any
    ): Observable<any> {
    const url = `http://localhost:3000/hoadonnhap/edit/${id}`;
    const body = {
      NgayNhap: NgayNhap,
      MaNguoiDung: MaNguoiDung,
      MaNXB: MaNXB,
     tong: tong

    };

    return this.http.post<any>(url, body);
  }
  addhoadonnhap(newItem: any): Observable<any> {
    const url = 'http://localhost:3000/hoadonnhap/add';
    return this.http.post<any>(url, newItem);
}


  getListcthdb() : Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/hoadonban/cthdb');
  }
  
  viewcthdb(id:any): Observable<any> {
    const url = `http://localhost:3000/hoadonban/get-list/${id}`;
    return this.http.get<any>(url);
  }
  getItemByIdctdh(id: any): Observable<any> {
    const url = `http://localhost:3000/hoadonban/ctdh/get-one/${id}`;
    return this.http.get<any>(url);
  }
  getItemByIdcthdn(id: any): Observable<any> {
    const url = `http://localhost:3000/hoadonnhap/cthdn/get-one/${id}`;
    return this.http.get<any>(url);
  }
  suatrangthai(id: number, Trangthai: any): Observable<any> {
    const url = `http://localhost:3000/hoadonban/edit/${id}`;
    const body = { Trangthai: Trangthai };
    return this.http.post<any>(url, body);
  }
  getthongke() : Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/hoadonban/thongkedoanhthu');
  }
  getthongkenam() : Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/hoadonban/thongkedoanhthunam');
  }
  addHoaDonNhap(hoaDonNhap: any): Observable<any> {
    const url = 'http://localhost:3000/hoadonnhap/create';
    return this.http.post<any>(url, hoaDonNhap);
}
  updateOrderStatus(hoadonban: any): Observable<any> {
   /*  const url =  `http://localhost:3000/hoadonban/update-status/${id}` ;
    const body ={ Trangthai: Trangthai }
  return this.http.put<any>(url, body); */
  return this.http.put<any>(`http://localhost:3000/hoadonban/update-status/${hoadonban.id}`, { Trangthai: hoadonban.Trangthai });

}
}
export class Book {
  title: string;
  author: string;
  stock: number;

  constructor(title: string, author: string, stock: number) {
    this.title = title;
    this.author = author;
    this.stock = stock;
  }

  displayInfo(): void {
    console.log(
      `title: ${this.title}, author: ${this.author}, stock: ${this.stock}` //
    );
  }

  borrowBook(): void {
    if (this.stock > 0) {
      this.stock--;
      console.log(`貸出しました`);
    } else {
      console.log(`在庫切れ`);
    }
  }
}

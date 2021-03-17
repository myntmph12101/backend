//dung framework express 
import express from 'express';
import morgan from 'morgan';
//tạo server
const app = express();
//setup cổng
const port = 4000;

//sẽ nhận mọi req gửi lên
app.use(morgan('dev'));
//morgan sẽ log thông tin của client gửi lên

//tạo tuyến đường với giao thức GET
app.get('/', (req, res) => {
    res.send('hihi')
})

//lắng nghe trên cổng 4000
app.listen(port, () => {
    console.log('server is running!',port);
})
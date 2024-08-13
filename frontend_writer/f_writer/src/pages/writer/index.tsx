import {
    PageHeader,
    Card,
    Avatar,
    Typography,
    Statistic,
    Row,
    Col,
    Button,
    Divider,
  } from 'antd';
  import { HeartOutlined, EyeOutlined, MessageOutlined } from '@ant-design/icons';
  
  const { Title, Text } = Typography;
  const { Meta } = Card;
  
  const data = [
    {
      title: 'LOVE AT FIRST SIGHT',
      author: 'Claudia Wilson',
      coverImage: '/path/to/cover1.jpg', // Replace with your image path
      views: 234556,
      likes: 100658,
      comments: 25,
      description: 'เมื่อความรักเกิดขึ้นในครั้งแรกที่พบ เจออะไรที่คาดไม่ถึง คนธรรมดากลายเป็นคนพิเศษได้หรือไม่? ร่วมลุ้นและหัวเราะไปกับเรื่องราวสุดฮาและอบอุ่นใจของพวกเขา',
    },
    {
      title: 'MY LONELY HOLIDAY',
      author: 'Claudia Wilson',
      coverImage: '/path/to/cover2.jpg', // Replace with your image path
      views: 524661,
      likes: 220758,
      comments: 5,
      description: 'เมื่อวันหยุดพักผ่อนแสนเหงากลายเป็นจุดเริ่มต้นของความรัก เมื่อคนธรรมดาพบกับเหตุการณ์ไม่คาดฝัน พวกเขาจะเปลี่ยนแปลงตัวเองและหัวใจของกันและกันได้อย่างไร? เตรียมพบกับเรื่องราวความรักสุดป่วนชวนหัวเราะ ที่จะทำให้คุณอบอุ่นหัวใจไปพร้อมกับพวกเขา!',
    },
  ];
  
  const BookCard = ({ book }) => (
    <Card
      hoverable
      style={{ width: 300, marginTop: 16, borderRadius: 8 }}
      cover={<img alt={book.title} src={book.coverImage} />}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=female" />} // Replace with author image or placeholder
        title={book.title}
        description={
          <>
            <Text>{book.author}</Text>
            <br />
            <Text type="secondary">{book.description}</Text>
          </>
        }
      />
      <Divider />
      <Row gutter={16} justify="space-around">
        <Col span={8}>
          <Statistic value={book.views} prefix={<EyeOutlined />} />
        </Col>
        <Col span={8}>
          <Statistic value={book.likes} prefix={<HeartOutlined />} />
        </Col>
        <Col span={8}>
          <Statistic value={book.comments} prefix={<MessageOutlined />} />
        </Col>
      </Row>
    </Card>
  );
  
  const MyComponent = () => (
    <div>
      <PageHeader
        className="site-page-header"
        title="LOKNIYAI"
        subTitle={<input type="text" placeholder="Search" />}
        extra={[
          <Button key="1" type="primary">
            + เพิ่มงานเขียน
          </Button>,
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" />, // Replace with user image or placeholder
          <span>฿ 5.00</span>,
        ]}
      />
      <Row gutter={16} justify="center">
        {data.map((book) => (
          <Col key={book.title} xs={24} sm={12} md={8} lg={6}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
  
  export default MyComponent;
  
import './SearchBox.css'
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBox = () => (
  <Space direction="vertical">
    <Search
      placeholder="What are you looking for?"
      onSearch={onSearch}
      style={{
        width: 600,
      }}
    />
  </Space>
);
export default SearchBox;
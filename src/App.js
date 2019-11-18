// @flow
import React from "react"
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  message
} from "antd"
import * as styles from "./App.less"

const { Option } = Select

class App extends React.Component {
  constructor(props) {
    super(props)
    const initialValue = {
      "@primary-color": "#1987a7",
      "@secondary-color": "#0000ff",
      "@text-color": "#000000",
      "@text-color-secondary": "#eb2f96",
      "@heading-color": "#fa8c16",
      "@layout-header-background": "#b36e94",
      "@btn-primary-bg": "#397dcc"
    }
    let vars = {}

    try {
      vars = {
        ...initialValue,
        ...JSON.parse(localStorage.getItem("app-theme"))
      }
    } finally {
      // eslint-disable-next-line react/no-unused-state
      this.state = { vars, initialValue }
      window.less
        .modifyVars(vars)
        .then(() => {})
        .catch(error => {
          message.error(`Failed to update theme`, error)
        })
    }
  }

  render() {
    return (
      <div className={styles.form}>
        <Form>
          <Form.Item
            label="数字输入框"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <InputNumber min={1} max={10} defaultValue={3} />
            <span className="ant-form-text"> 台机器</span>
            <a href="https://ant.design">链接文字</a>
          </Form.Item>
          <Form.Item
            label="开关"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item
            label="滑动输入条"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Slider defaultValue={70} />
          </Form.Item>
          <Form.Item
            label="选择器"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Select defaultValue="lucy" style={{ width: 192 }}>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>
                disabled
              </Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="日期选择框"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button style={{ marginLeft: 8 }}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default App

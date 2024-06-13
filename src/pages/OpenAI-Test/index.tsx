import { useState } from 'react';

import { OpenAI } from 'openai';
import { Form, Input, Button } from 'antd/es';

// const sdk = 'sk-BV9BwfND57gXtimP2cB6454fE33b4dBbB52c26B66563Cb3c'
// const baseURL="https://api.xty.app/v1"

const OpenAITest: React.FC = () => {
  // const [sdk, setSDK] = useState('');
  // const [baseURL, setBaseURL] = useState('');

  const [sdk, setSDK] = useState('sk-BV9BwfND57gXtimP2cB6454fE33b4dBbB52c26B66563Cb3c');
  const [baseURL, setBaseURL] = useState('https://api.xty.app/v1');

  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const openai = new OpenAI({
    apiKey: sdk,
    baseURL: baseURL,
    dangerouslyAllowBrowser: true
  });
  const callChatGPT = async (inputText: string) => {
    console.log('inputText', inputText)
    //这里定义接口为流式传输
    const stream = await openai.beta.chat.completions.stream({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: inputText }],
      stream: true,
    });

    stream.on('content', (delta, snapshot) => {
      //在这里即可在每次接受到流式时就可以
      console.log('delta', delta)
      //通过TextDecoder解析出字符串
      //触发setState，触发渲染
      setOutput(prevState => prevState + delta)
    });
  };

  return (
    <>
      <Form>
        <Form.Item label="SDK" style={{ width: '300px' }} >
          <Input type="text"
            defaultValue={sdk}
            onChange={(e) => setSDK(e.target.value)} />
        </Form.Item>
        <Form.Item label="BaseURL" style={{ width: '300px' }} >
          <Input type="text"
            defaultValue={baseURL}
            onChange={(e) => setBaseURL(e.target.value)} /></Form.Item>
        <Form.Item label="prompt" style={{ width: '300px' }} >
          <Input type="text"
            onChange={(e) => setValue(e.target.value)} /></Form.Item>
        <Form.Item style={{ width: '300px' }} >
          <Button style={{ width: '100%' }} type={'primary'} onClick={() => {
            callChatGPT(value)
          }}>发送</Button>
        </Form.Item>
        <Form.Item label="answer" style={{ width: '300px' }}>
          <p>{output}</p>
        </Form.Item>

      </Form>


    </>
  );

};

export default OpenAITest;





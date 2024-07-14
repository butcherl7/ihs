import { useMemo, useState } from "react";
import { Button, ConfigProvider, Divider, Select, Space } from "antd";

const App = () => {
  const data = [
    {
      site: "LXSZ",
      models: [
        { model: "X5", stages: [{ stage: "Hello" }, { stage: "World" }] },
        { model: "X6", stages: [{ stage: "Ract" }, { stage: "App" }] },
      ],
    },
    {
      site: "LXKS",
      models: [
        { model: "X7", stages: [{ stage: "TSX" }, { stage: "JSX" }] },
        { model: "X8", stages: [{ stage: "Java" }, { stage: "Groovy" }] },
      ],
    },
  ];

  const [site, setSite] = useState("LXSZ");
  const [model, setModel] = useState("");
  const [stage, setStage] = useState("");

  const modelData = useMemo(() => data.find((item) => item.site === site)?.models, [site]);
  const stageData = useMemo(() => modelData?.find((item) => item.model === model)?.stages, [site, model]);

  const handleSiteChange = (value: string) => {
    setSite(value);
    setModel("");
  };

  const handleModelChange = (value: string) => {
    setModel(value);
    setStage("");
  };

  const handleStageChange = (value: string) => setStage(value);

  return (
    <ConfigProvider wave={{ disabled: true }} theme={{ token: { borderRadius: 4, colorPrimaryHover: "" } }}>
      <div className="App">
        <Space>
          <Button type="primary">Button</Button>
          <Button>Button</Button>

          <Divider type="vertical" />

          <Select
            value={site}
            options={data}
            style={{ width: 120 }}
            onChange={handleSiteChange}
            fieldNames={{ label: "site", value: "site" }}
          />

          <Select
            value={model}
            options={modelData}
            style={{ width: 120 }}
            onChange={handleModelChange}
            fieldNames={{ label: "model", value: "model" }}
          />

          <Select
            value={stage}
            options={stageData}
            style={{ width: 120 }}
            onChange={handleStageChange}
            fieldNames={{ label: "stage", value: "stage" }}
          />
        </Space>
      </div>
    </ConfigProvider>
  );
};

export default App;

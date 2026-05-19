document.documentElement.classList.add("js");

const diagrams = {
  architecture: {
    src: "./assets/architecture.png",
    alt: "系统总体架构图",
    caption: "前端交互层、后端服务层、智能体工作流层、RAG 知识库层和发布归档层组成完整闭环。"
  },
  workflow: {
    src: "./assets/workflow.png",
    alt: "端到端工作流图",
    caption: "从主题输入、资料增强、内容生成、质量评估到 HTML 预览，形成端到端可追踪流程。"
  },
  agents: {
    src: "./assets/agents.png",
    alt: "多智能体协作图",
    caption: "Analyzer、Research、Writer、Formatter、Finalizer 等节点分工协作，降低单次生成的不确定性。"
  },
  rag: {
    src: "./assets/rag.png",
    alt: "RAG 检索增强生成流程图",
    caption: "通过文档切分、Embedding、Chroma 持久化和 Top-K 检索，为公众号内容提供企业知识支撑。"
  },
  evaluation: {
    src: "./assets/evaluation.png",
    alt: "内容质量评估闭环图",
    caption: "从可读性、专业性、主题关联性、结构完整性等维度对生成内容进行质量检查和优化。"
  }
};

const diagramImage = document.querySelector("#diagramImage");
const diagramCaption = document.querySelector("#diagramCaption");
const tabButtons = document.querySelectorAll(".tab-button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.tab;
    const nextDiagram = diagrams[key];

    if (!nextDiagram || !diagramImage || !diagramCaption) {
      return;
    }

    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    diagramImage.src = nextDiagram.src;
    diagramImage.alt = nextDiagram.alt;
    diagramCaption.textContent = nextDiagram.caption;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

requestAnimationFrame(() => {
  document.querySelectorAll(".reveal").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("in-view");
    }
  });
});

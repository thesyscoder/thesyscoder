<div align="center" style="background:#0b0f14;color:#dbe9ff;padding:36px;border-radius:12px;line-height:1.2">
  <h1 style="margin:0;font-size:36px">Pruthviraj</h1>
  <div style="margin-top:6px;font-weight:600;color:#9fb0c9">Site Reliability Engineer</div>
  <div style="margin-top:12px;color:#9fb0c9;font-style:italic">Architecture first — make reliable systems feel ordinary.</div>

  <div style="margin-top:18px">
    <!-- Subtle animated illustration (SVG, no external assets) -->
    <svg width="220" height="64" viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stop-color="#5dd0ff"/>
          <stop offset="1" stop-color="#8fa3bd"/>
        </linearGradient>
      </defs>

      <!-- lane -->
      <rect x="8" y="30" width="204" height="3" rx="1.5" fill="#0e1620"/>
      <!-- three nodes with subtle vertical bobbing -->
      <g transform="translate(30,0)">
        <circle cx="0" cy="28" r="6" fill="url(#g)" opacity="0.95">
          <animate attributeName="cy" dur="2.4s" values="28;22;28" repeatCount="indefinite" begin="0s"/>
        </circle>
      </g>

      <g transform="translate(110,0)">
        <circle cx="0" cy="28" r="6" fill="#6fb9ff" opacity="0.9">
          <animate attributeName="cy" dur="2.4s" values="28;24;28" repeatCount="indefinite" begin="0.3s"/>
        </circle>
      </g>

      <g transform="translate(190,0)">
        <circle cx="0" cy="28" r="6" fill="#8fa3bd" opacity="0.85">
          <animate attributeName="cy" dur="2.4s" values="28;26;28" repeatCount="indefinite" begin="0.6s"/>
        </circle>
      </g>

      <!-- lightweight pulse for observability -->
      <circle cx="110" cy="28" r="10" stroke="#8fa3bd" stroke-opacity="0.06" fill="none">
        <animate attributeName="r" dur="2.4s" values="10;18;10" repeatCount="indefinite" begin="0s"/>
        <animate attributeName="stroke-opacity" dur="2.4s" values="0.06;0.0;0.06" repeatCount="indefinite" begin="0s"/>
      </circle>
    </svg>
  </div>
</div>

---

## Who I am

I build the invisible infrastructure that determines whether services survive the night.  
Platform-minded SRE with a CS foundation — I focus on ownership boundaries, measurable safety, and systems that age gracefully.

---

## How I think

- Define invariants before you design features.  
- Observe before optimizing — data drives decisions.  
- Small blast radius and explicit recovery paths.  
- Clear contracts and typed errors over clever shortcuts.  
- Automate repetitive ops; keep humans for judgment.

```text
invariants → ownership → observability → automation → iterate
```

---

## What I'm building now

Working privately on production-grade, multi-tenant platform work — no public product details.  
Instead of naming internal projects, here are the core design priorities I apply:

- Typed RPC contracts and defensive error handling.  
- Kubernetes-first deployments with GitOps and progressive rollouts.  
- Strong isolation between tenants, small failure domains.  
- Observability that maps directly to runbooks and SLOs.  
- Developer experience: self-service primitives and safe defaults.

I publish patterns, runbooks, and small runnable examples — not internal IP.

---

## Tech — curated & intentional

A concise set I reach for when it fits the problem.

- Orchestration: `Kubernetes` (operators, namespaces as guardrails)  
- Infra: `Terraform`, GitOps (`ArgoCD`)  
- Observability: `Prometheus`, `OpenTelemetry`, structured logs & traces  
- Backend: `Go`, `gRPC`, `Postgres`  
- Delivery: GitHub Actions (progressive rollouts)

---

## Writing & links

Short, tactical posts and incident retrospectives — trade-offs and lessons.

- ✒️ Medium — https://medium.com/@thesyscoder  
- 🔗 LinkedIn — https://www.linkedin.com/in/thesyscoder  
- 🧭 GitHub — https://github.com/thesyscoder

---

<details>
<summary><strong style="cursor:pointer">Activity — peek</strong></summary>

Active work lives in small, runnable repositories: platform patterns, observability recipes, incident playbooks.  
I prefer code you can clone and run in a dev cluster.

</details>

---

<div align="center" style="color:#9fb0c9;padding:18px 6px">
I favour clarity over cleverness and systems that make reliable outcomes ordinary.  
If you want a focused architecture review or a short design conversation — reach out on GitHub or LinkedIn. ✉️
</div>

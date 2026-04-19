import { onCLS, onINP, onLCP, type Metric } from 'web-vitals';

/*
  Core Web Vitals RUM → window.dataLayer.
  Fires one `web_vital` event per metric once it settles. GTM can forward
  these to GA4 / BigQuery so we can monitor p75 LCP / INP / CLS in the field.

  Per web.dev: "Always concentrate on field Core Web Vitals over Lighthouse
  metrics." This gives us the field signal — Lighthouse/PageSpeed Insights
  remains the lab check.

  2026 thresholds (web.dev/articles/vitals):
  - LCP ≤ 2.5s
  - INP ≤ 200ms
  - CLS ≤ 0.1
*/

type DataLayerEvent = Record<string, unknown>;
interface WindowWithDataLayer extends Window {
  dataLayer?: DataLayerEvent[];
}

const push = (metric: Metric) => {
  const w = window as WindowWithDataLayer;
  if (!w.dataLayer) return;
  // CLS is unitless (0-1). LCP/INP are milliseconds. Multiply CLS by 1000
  // so all values land as integers for easier GA4 aggregation.
  const rawValue = metric.name === 'CLS' ? metric.value * 1000 : metric.value;
  w.dataLayer.push({
    event: 'web_vital',
    metric_name: metric.name,
    metric_value: Math.round(rawValue),
    metric_rating: metric.rating,
    metric_id: metric.id,
  });
};

export const initWebVitals = () => {
  onLCP(push);
  onINP(push);
  onCLS(push);
};

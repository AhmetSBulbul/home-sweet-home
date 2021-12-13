---
title: 'Toggle Özellikli useLockBodyScroll'
date: '2021-10-20'
description: 'Toggle özellikli useLockBodyScroll hook'
category:
    - react
    - hook
---

## İşlevi

Toggle özelliği ile web sitenin body elementinde scroll özelliğini açıp kapatıyor.

## Kod



```javascript
import { useEffect } from "react";

export default function useLockBodyScrollToggle(
  toggle
) {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(
      document.body
    ).overflow;
    // Prevent scrolling on toggle active
    document.body.style.overflow = toggle
      ? "hidden"
      : originalStyle;
    // Re-enable scrolling when toggle switched off
    return () =>
      (document.body.style.overflow =
        originalStyle);
  }, [toggle]); 
}
```
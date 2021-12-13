---
title: 'Nextjs Base Button Component'
date: '2021-10-29'
description: 'Hem navigasyon için hem de işlevsel fonksiyonlar için kullanılabilen buton. Ek olarak işlevsel link özelliğini de destekliyor.'
category:
    - Nextjs
    - Component
---

## İşlevi

Nextjs framework'ü için "button", "a", "next/link" ve "functional next/link" componentlerinden ihtiyaç duyulan componenti döndürüyor. Kullanımdaki karmaşıklığı azaltmak amacıyla yazıldı.

### Parameters

- externalLink(default: false)
- className
- props


### Nasıl Çalışıyor?

Eğer href parametresi kullanılırsa link, onClick parametresi kullanılırsa button componentlerini geri döndürüyor. Hem href hem de onClick parametreleri kullanılırsa Nextjs Link componentinin [dökümanına](https://nextjs.org/docs/api-reference/next/link) göre oluşturulmuş FunctionalLink componentini döndürüyor. ExternalLink parametresi true değer taşıyor ise a tagi döndürüyor.

### Bağımlılıklar

- [Next/Link](https://nextjs.org/docs/api-reference/next/link)

### Kod

```javascript
import Link from "next/link";
import React from "react";

/* Nextjs Base Button Component */

const FunctionalLink = React.forwardRef(
  (
    { onClick, href, children, ...props },
    ref
  ) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

function FunctionalLinkButton({
  href,
  children,
  onClick,
  ...props
}) {
  return (
    <Link href={href} passHref>
      <FunctionalLink
        onClick={onClick}
        {...props}
      >
        {children}
      </FunctionalLink>
    </Link>
  );
}

function LinkButton({
  href,
  children,
  ...props
}) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function ExternalLinkButton({
  href,
  children,
  ...props
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

function Button({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

const BaseButton = ({
  children,
  externalLink = false,
  className,
  ...props
}) => {
  const CurrBtn = externalLink
    ? ExternalLinkButton
    : props.href
    ? props.onClick
      ? FunctionalLinkButton
      : LinkButton
    : Button;

  return (
    <CurrBtn className={className} {...props}>
      {children}
    </CurrBtn>
  );
};

export default BaseButton;
```
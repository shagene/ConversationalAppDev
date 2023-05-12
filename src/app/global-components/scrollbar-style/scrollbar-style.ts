import { ElementRef } from '@angular/core';

export function applyScrollbarStyle(element: ElementRef, primaryColor: string): void {
    const scrollbarStyle = document.createElement('style');
    scrollbarStyle.id = 'dynamic-scrollbar-style';
    scrollbarStyle.textContent = `
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${primaryColor};
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(${primaryColor}, 0.8);
    }
  `;

    const existingStyle = document.getElementById('dynamic-scrollbar-style');
    if (existingStyle) {
        existingStyle.remove();
    }

    element.nativeElement.appendChild(scrollbarStyle);
}

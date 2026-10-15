import { LightningElement, api } from 'lwc';

export default class TableauAutoSize extends LightningElement {
    @api tableauUrl;          // e.g. https://prod-useast-a.online.tableau.com/t/site/views/Workbook/Dashboard
    @api bottomOffset = 16;   // px gap left at the bottom of the screen
    @api minHeight = 400;     // never shrink below this

    height = 600;
    _initialized = false;
    _frame;
    _onResize = () => {
        cancelAnimationFrame(this._frame);
        this._frame = requestAnimationFrame(() => this.computeHeight());
    };

    get vizUrl() {
        if (!this.tableauUrl) return '';
        const sep = this.tableauUrl.includes('?') ? '&' : '?';
        return `${this.tableauUrl}${sep}:embed=y&:showVizHome=no&:toolbar=no`;
    }

    get frameStyle() {
        return `width:100%;height:${this.height}px;border:0;display:block;`;
    }

    renderedCallback() {
        if (this._initialized) return;
        this._initialized = true;

        window.addEventListener('resize', this._onResize);
        this.computeHeight();
        // Lightning can shift the layout after the first render (headers, tabs), so recalculate once more
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => this.computeHeight(), 600);
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this._onResize);
        cancelAnimationFrame(this._frame);
    }

    computeHeight() {
        const el = this.refs.container;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const available = Math.floor(window.innerHeight - top - this.bottomOffset);
        const newHeight = Math.max(this.minHeight, available);
        if (newHeight !== this.height) {
            this.height = newHeight;
        }
    }
}
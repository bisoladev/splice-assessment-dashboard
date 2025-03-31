import { Fragment } from "react/jsx-runtime";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  to: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const pathname = usePathname();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isActive = pathname === item.to; // Check if this breadcrumb is the active one

          return (
            <Fragment key={item.to}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.to}
                  className={
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;

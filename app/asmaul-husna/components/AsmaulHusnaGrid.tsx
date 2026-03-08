'use client';

import { useState } from 'react';
import AsmaulHusnaCard from './AsmaulHusnaCard';
import TasbihCounterModal from '@/components/TasbihCounterModal';
import { AsmaulHusnaItem } from '../data/asmaulHusna';

interface AsmaulHusnaGridProps {
  data: AsmaulHusnaItem[];
}

export default function AsmaulHusnaGrid({ data }: AsmaulHusnaGridProps) {
  const [selectedName, setSelectedName] = useState<AsmaulHusnaItem | null>(null);

  const handleCardClick = (item: AsmaulHusnaItem) => {
    setSelectedName(item);
  };

  const handleCloseModal = () => {
    setSelectedName(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {data.map((item) => (
          <AsmaulHusnaCard
            key={item.id}
            item={item}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>

      {selectedName && (
        <TasbihCounterModal
          isOpen={true}
          onClose={handleCloseModal}
          nameArabic={selectedName.nameArabic}
          nameLatin={selectedName.nameLatin}
          meaning={selectedName.meaningEn}
        />
      )}
    </>
  );
}

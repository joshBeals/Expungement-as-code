/**
 * Joshua Alele-Beals
 * joshbeals22@gmail.com
 * github.com/joshBeals
 */
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {

  const [convictions, setConvictions] = useState(() => {
    const savedConviction = localStorage.getItem('ConvictionContext');
    return savedConviction ? JSON.parse(savedConviction) : [];
  });
  const [dateRanges, setDateRanges] = useState(() => {
    const savedRanges = localStorage.getItem('RangesContext');
    return savedRanges ? JSON.parse(savedRanges) : [];
  });
  const [waitingPeriods, setWaitingPeriods] = useState(() => {
    const savedWaiting = localStorage.getItem('WaitingContext');
    return savedWaiting ? JSON.parse(savedWaiting) : [];
  });
  const [totalLimit, setTotalLimit] = useState(() => {
    const savedTotal = localStorage.getItem('totalLimit');
    return savedTotal ? savedTotal : 0;
  });
  const [limits, setLimits] = useState(() => {
    const savedLimit = localStorage.getItem('limits');
    return savedLimit ? JSON.parse(savedLimit) : [];
  });
  const [scenarios, setScenarios] = useState(() => {
    const savedScenarios = localStorage.getItem('scenarios');
    return savedScenarios ? JSON.parse(savedScenarios) : [];
  });
  const [u_scenarios, setUScenarios] = useState(() => {
    const savedScenarios = localStorage.getItem('u_scenarios');
    return savedScenarios ? JSON.parse(savedScenarios) : [];
  });

  const [showResult, setShowResult] = useState(false);
  const [showUResult, setShowUResult] = useState(false);
  const [interpretation, setInterpretation] = useState('');

  useEffect(() => {
    localStorage.setItem('ConvictionContext', JSON.stringify(convictions));
    localStorage.setItem('RangesContext', JSON.stringify(dateRanges.sort((a, b) => parseInt(a.range) - parseInt(b.range))));
    localStorage.setItem('WaitingContext', JSON.stringify(waitingPeriods));
    localStorage.setItem('totalLimit', totalLimit);
    localStorage.setItem('limits', JSON.stringify(limits));
    localStorage.setItem('scenarios', JSON.stringify(scenarios));
    localStorage.setItem('u_scenarios', JSON.stringify(u_scenarios));
  }, [convictions, dateRanges, waitingPeriods, totalLimit, limits, scenarios, u_scenarios]);

  // Function to add a conviction
  const addConviction = (conviction) => {
    setConvictions([...convictions, conviction]);
  };

  // Function to remove a conviction by index
  const deleteConviction = (index) => {
    const filteredConvictions = convictions.filter((_, idx) => idx !== index);
    setConvictions(filteredConvictions);
  };

  // Function to add a date range
  const addDateRange = (range) => {
    setDateRanges([...dateRanges, range]);
  };

  // Function to remove a date range by index
  const deleteDateRange = (index) => {
    const filteredRanges = dateRanges.filter((_, idx) => idx !== index);
    setDateRanges(filteredRanges);
  };

  const addWaitingPeriod = (range) => {
    setWaitingPeriods([...waitingPeriods, range]);
  };

  const deleteWaitingPeriod = (index) => {
    const filteredRanges = waitingPeriods.filter((_, idx) => idx !== index);
    setWaitingPeriods(filteredRanges);
  };

  const addLimit = (limit) => {
    setLimits([...limits, limit]);
  };

  const deleteLimit = (index) => {
    const filteredRanges = limits.filter((_, idx) => idx !== index);
    setLimits(filteredRanges);
  };

  const addScenario = (scenario) => {
    setScenarios([...scenarios, scenario]);
  };

  const addUScenario = (scenario) => {
    const updatedScenarios = [...u_scenarios, scenario]; // Add the new scenario
  
    const sortedConvictions = updatedScenarios.sort((a, b) => {
      const getComparableDate = (conviction) => {
        if (conviction.year) {
          return parseInt(conviction.year, 10); // Fixed year
        } else if (conviction.startYear) {
          return parseInt(conviction.startYear, 10); // Start of range
        }
        return Infinity; // No date specified
      };
  
      // If both convictions lack dates, treat them as equal (no change in order)
      if (!a.year && !a.startYear && !b.year && !b.startYear) {
        return 0;
      }
  
      // If only one of the convictions lacks a date, place it after the other
      if (!a.year && !a.startYear) {
        return 1; // `a` goes after `b`
      }
      
      if (!b.year && !b.startYear) {
        return -1; // `b` goes after `a`
      }
  
      // Otherwise, compare based on the dates
      return getComparableDate(a) - getComparableDate(b);
    });
  
    setUScenarios(sortedConvictions); // Update the state with the sorted scenarios
  };
  

  const deleteScenario = (index) => {
    const filteredRanges = scenarios.filter((_, idx) => idx !== index);
    setScenarios(filteredRanges);
  };

  const deleteUScenario = (index) => {
    const filteredRanges = u_scenarios.filter((_, idx) => idx !== index);
    setUScenarios(filteredRanges);
  };
  
  const reorderUScenarios = (newOrder) => {
    setUScenarios(newOrder);
  };

  // Value to be passed to consuming components
  const value = {
    convictions,
    addConviction,
    deleteConviction,
    dateRanges,
    addDateRange,
    deleteDateRange,
    waitingPeriods,
    addWaitingPeriod,
    deleteWaitingPeriod,
    totalLimit,
    setTotalLimit,
    limits,
    addLimit,
    deleteLimit,
    scenarios,
    addScenario,
    deleteScenario,
    showResult,
    setShowResult,
    interpretation,
    setInterpretation,
    u_scenarios,
    addUScenario,
    deleteUScenario,
    reorderUScenarios,
    showUResult,
    setShowUResult,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
